const express = require('express');
const router = express.Router();
const Auth = require('./auth');
const Todo = require('./todo');

router.get('/', (req, res) => {
  res.send(`<h1>Welcome Toto</h1>`);
});

router.use('/auth', Auth);
router.use('/Todo', Todo);

module.exports = router;