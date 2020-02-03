import io from 'socket.io-client';
import { socketUrl } from '../config/constants';

export const isAuthenticated = () => Boolean(getUsername());

export const getUsername = () => window.localStorage.getItem('username');

export const connectToChat = (username, callback) => {
  const socket = io.connect(socketUrl);

  socket.on('connect', () => {
    callback.onConnected(socket);

    socket.on('message', message => {
      callback.onMessage(message);
    });
  });
}

export const isSender = username => getUsername() === username;
