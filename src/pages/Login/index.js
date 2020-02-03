import React, { useState } from 'react';
import { connectToChat } from '../../models/User';
import { routes } from '../../config/constants';

import './index.scss';

const Login = () => {
  const [ username, setUsername ] = useState('');

  const handleLogin = e => {
    e.preventDefault();

    connectToChat(username, {
      onConnected: () => {
        window.localStorage.setItem('username', username);
        window.location.href = routes.CHAT;
      }
    });
  }

  return (
    <section className="Login">
      <div className="Login__title">
        <h2 className="Login__title-text">
          MultroomChat - Login
        </h2>
      </div>
      <div className="Login__form-area">
        <form className="Login__form" onSubmit={handleLogin}>
          <input
            className="Login__input"
            type="text"
            placeholder="Nome aleatório ai caraio"
            required
            value={username}
            onChange={e => setUsername(e.target.value)}  
          />
          <input className="Login__input" type="submit" value="Submit" required />
        </form>
      </div>
    </section>
  )
};

export default Login;
