import React, { useState } from 'react';
import { login } from '../../models/User';

import './index.scss';

const Login = () => {
  const [ username, setUsername ] = useState('');

  return (
    <section className="Login">
      <div className="Login__title">
        <h2 className="Login__title-text">
          MultroomChat - Login
        </h2>
      </div>
      <div className="Login__form-area">
        <form className="Login__form" onSubmit={e => login(e, username)}>
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
