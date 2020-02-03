import React, { useState, useEffect } from 'react';
import { connectToChat, isSender } from '../../models/User';
import classname from 'classnames';
import { validate, template } from '../../models/Message';

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
  const [ messages, setMessages ] = useState([{ username: 'Pedro', message: 'alo' }]);
  const [ socket, setSocket ] = useState(null);

  useEffect(() => {
    connectToChat(username, {
      onConnected: socketIo => {
        setSocket(socketIo)
      },
      onMessage: addMessage
    })
  }, [username]);

  const handleSendMessage = e => {
    e.preventDefault();

    sendMessage(message);
  }

  const addMessage = newMessage => {
    console.log(messages)
    console.log(newMessage)
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
    })
  }

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
    </section>
  )
};

export default Chat;
