const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthSchema = new Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true }
}, { collection: 'auth' });

const TodoSchema = new Schema({
  title: { type: String, require: true },
  list: [
    {
      item: { type: String, default: null },
      isComplete: { type: Boolean, default: false }
    }
  ],
  favorite: { type: Boolean, default: false },
  createdAt: { type: Date, default: new Date },
  completeAt: { type: Date, default: null }
}, { collection: 'todo' });

const Auth = mongoose.model('Auth', AuthSchema);
const Todo = mongoose.model('Todo', TodoSchema);
module.exports = { Auth, Todo };