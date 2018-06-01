const express = require('express');
const ctrl = require('./controller');
const router = express.Router();

router.get('/', ctrl.find);
router.get('/:id', ctrl.findOne);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;