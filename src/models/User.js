import openSocket from 'socket.io-client';
import { socketUrl } from '../config/constants';

export const isAuthenticated = () => Boolean(window.localStorage.getItem('username'));

export const login = (event, username) => {
  event.preventDefault();

  const socket = openSocket(socketUrl);

  socket.on('connect', function() {
      window.localStorage.setItem('username', username);
      window.location.href = 'chat';
  });
}
