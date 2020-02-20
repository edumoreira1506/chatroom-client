export const validate = (message, callback) => {
  if (!isValid(message)) return callback.onError('Tamanho da mensagem inválida!');

  return callback.onValidated();
}

export const template = (username, message) => ({
  username, message
});

const isValid = message => Boolean(message);
