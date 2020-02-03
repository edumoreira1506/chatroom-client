export const validate = (message, callback) => {
  if (isValid(message)) return callback.onValidated();

  return callback.onError('Tamanho da mensagem inválida!');
}

export const template = (username, message) => ({
  username, message
})

const isValid = message => Boolean(message);
