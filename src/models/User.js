import io from 'socket.io-client';
import { socketUrl, routes } from '../config/constants';

export const login = username => {
  window.localStorage.setItem('username', username);
  window.location.href = routes.CHAT;
}

export const logout = () => {
  window.localStorage.clear();
  window.location.href = routes.LOGIN;
}

export const isAuthenticated = () => Boolean(getUsername());

export const getUsername = () => window.localStorage.getItem('username');

export const createSocket = () => {
  const socket = io.connect(socketUrl);

  return socket;
}

export const isSender = username => getUsername() === username;
