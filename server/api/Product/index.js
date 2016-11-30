'use strict';

var express = require('express');
var controller = require('./Product.controller');

var router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.put('/:id/:product', controller.update);

module.exports = router;
