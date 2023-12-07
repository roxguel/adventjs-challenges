function decode(message) {
  while (message.includes("(")) {
    const last = message.lastIndexOf('(');
    const close = message.indexOf(')', last);
    message = message.substring(0, last)
      + message.substring(last + 1, close).split('').reverse().join('')
      + message.substring(close + 1);
  }
  return message;
}