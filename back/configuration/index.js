exports.get = (key) => {
  let config = require('./config.dev');
  if (process.env.NODE_ENV === 'production') {
    config = require('./config.prod');
  }

  return config[key];
}