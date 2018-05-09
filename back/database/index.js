const config = require('configuration');
const mongoose = require('mongoose');
const USER = config.get('USER');
const PASS = config.get('PASS');

mongoose.Promise = global.Promise;

exports.connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(`mongodb://${USER}:${PASS}@ds119350.mlab.com:19350/todo`);
    const connection = mongoose.connection;
    connection.on('error', reject);
    connection.once('open', resolve);
  })
};