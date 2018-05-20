const { Todo } = require('model');

exports.find = (req, res) => {
  Todo.find({}).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}

exports.findOne = (req, res) => {
  const _id = req.params.id;

  Todo.findOne({ _id }).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}

exports.create = (req, res) => {
  const data = req.body;
  const todo = new Todo(data);

  todo.save((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}

exports.update = (req, res) => {
  const data = req.body;
  const _id = req.params.id;

  Todo.update({ _id }, data).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}

exports.remove = (req, res) => {
  const _id = req.params.id;

  Todo.remove({ _id }).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}