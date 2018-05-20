const { Auth } = require('model');

exports.find = (req, res) => {
  Auth.find({}).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}

exports.findOne = (req, res) => {
  const _id = req.params.id;

  Auth.findOne({ _id }).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}

exports.create = (req, res) => {
  const data = req.body;
  console.log(data);
  const auth = new Auth(data);

  auth.save((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}

exports.update = (req, res) => {
  const data = req.body;
  const _id = req.params.id;

  Auth.update({ _id }, data).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}

exports.remove = (req, res) => {
  const _id = req.params.id;
  
  Auth.remove({ _id }).exec((error, data) => {
    if (error) throw new Error(error);
    res.send(data);
  });
}