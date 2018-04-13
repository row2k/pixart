"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = require("firebase");

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  apiKey: "AIzaSyCAHbNIoPLKYH9sr_S_wlOhYJ87azO_3g0",
  authDomain: "pixart-65074.firebaseapp.com",
  databaseURL: "https://pixart-65074.firebaseio.com",
  projectId: "pixart-65074",
  storageBucket: "pixart-65074.appspot.com",
  messagingSenderId: "894258351728"
}; // import Rebase from 're-base';


var base = _firebase2.default.initializeApp(config);

exports.default = base;