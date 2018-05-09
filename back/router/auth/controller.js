const { Auth } = require('model');

exports.find = (req, res) => {
  Auth.find({}).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(`<pre>${data}</pre>`);
  });
}

exports.findOne = (req, res) => {
  const _id = req.params.id;

  Auth.findOne({ _id }).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(`<pre>${data}</pre>`);
  });
}

exports.create = (req, res) => {
  const data = req.body;
  console.log(data);
  const auth = new Auth(data);

  auth.save((error, data) => {
    if (error) throw new Error(error);
    res.send(`<pre>${data}</pre>`);
  });
}

exports.update = (req, res) => {
  const data = req.body;
  const _id = req.params.id;

  Auth.update({ _id }, data).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(`<pre>${data}</pre>`);
  });
}

exports.remove = (req, res) => {
  const _id = req.params.id;
  
  Auth.remove({ _id }).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(`<pre>${data}</pre>`);
  });
}