import React from 'react';

import './index.scss';

const Login = () => (
  <section className="Login">
    <div className="Login__title">
      <h2 className="Login__title-text">
        MultroomChat - Login
      </h2>
    </div>
    <div className="Login__form-area">
      <form className="Login__form">
        <input className="Login__input" type="text" placeholder="Nome aleatório ai caraio" required />
        <input className="Login__input" type="submit" value="Submit" required />
      </form>
    </div>
  </section>
);

export default Login;
