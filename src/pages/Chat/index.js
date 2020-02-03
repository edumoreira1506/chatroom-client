import React, { useState, useEffect } from 'react';
import { isSender, logout, createSocket } from '../../models/User';
import { validate, template } from '../../models/Message';
import classname from 'classnames';

import './index.scss';

const messageClassName = ({ username }) => classname(
  'Chat__message',
  {
    'Chat__message--black': isSender(username),
    'Chat__message--grey': !isSender(username)
  }
)

const Chat = ({ username }) => {
  const [ message, setMessage ] = useState('');
  const [ messages, setMessages ] = useState([]);
  const [ socket, setSocket ] = useState(null);

  const handleSendMessage = e => {
    e.preventDefault();

    sendMessage(message);
  }

  const addMessage = newMessage => {
    const oldMessages = [ ...messages ];

    setMessages([...oldMessages, newMessage]);
  }

  const sendMessage = message => {
    validate(message, {
      onError: error => alert(error),
      onValidated: () => {
        const newMessage = template(username, message);

        socket.emit('message', newMessage);

        addMessage(newMessage);
      }
    });
  }

  useEffect(() => {
    const socketIo = createSocket();

    socketIo.on('connect', () => {
      setSocket(socketIo);

      const message = template(username, `${username} acabou de entrar`);

      socketIo.emit('message', message);
      socketIo.on('message', addMessage);
    });
  }, [username]);

  return (
    <section className="Chat">
      <ul className="Chat__content">
        {
          messages.map((message, index) =>
            <li className={messageClassName(message)} key={index}>
              <div className="Chat__username">
                { message.username }
              </div>
              <div className="Chat__message-text">
                { message.message }
              </div>
            </li>
          )
        }
      </ul>
      <div className="Chat__submit-area">
        <form className="Chat__form" onSubmit={handleSendMessage}>
          <input
            type="text"
            className="Chat__input"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <input
            type="submit"
            className="Chat__submit-button"
          />
        </form>
      </div>
      <button className="Chat__logout" onClick={logout}>
        Sair
      </button>
    </section>
  )
};

export default Chat;
