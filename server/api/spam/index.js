'use strict';

var router = require('koa-router')();

var ctrl = require('./spam.controller.js');
// var auth = require('../../auth');

router.get('/', ctrl.index);

module.exports = router;