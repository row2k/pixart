'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reBase = require('re-base');

var _reBase2 = _interopRequireDefault(_reBase);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rebase = _reBase2.default.createClass(_base2.default.database());

exports.default = rebase;