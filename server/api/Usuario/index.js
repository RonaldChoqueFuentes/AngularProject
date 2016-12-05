'use strict';

var express = require('express');
var controller = require('./Usuario.controller');

var router = express.Router();

//router.get('/', controller.index);
router.put('/:user/:password', controller.LoginUser);

module.exports = router;
