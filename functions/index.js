'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pixart = undefined;

var _firebaseFunctions = require('firebase-functions');

var functions = _interopRequireWildcard(_firebaseFunctions);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _App = require('./src/App');

var _App2 = _interopRequireDefault(_App);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import fs from 'fs';
//
// const index = fs.readFileSync(__dirname + '/index.html', 'utf8');

var index = '\n<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <title>Pixart</title>\n    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Monoton">\n    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57.png" />\n    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114.png" />\n    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72.png" />\n    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />\n    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="apple-touch-icon-60x60.png" />\n    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-touch-icon-120x120.png" />\n    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76.png" />\n    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />\n    <link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />\n    <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />\n    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />\n    <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />\n    <link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />\n    <meta name="application-name" content="&nbsp;"/>\n    <meta name="msapplication-TileColor" content="#FFFFFF" />\n    <meta name="msapplication-TileImage" content="mstile-144x144.png" />\n    <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />\n    <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />\n    <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />\n    <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />\n    <!-- Start of Async Drift Code -->\n    <script>\n    !function() {\n      var t;\n      if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0,\n      t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],\n      t.factory = function(e) {\n        return function() {\n          var n;\n          return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;\n        };\n      }, t.methods.forEach(function(e) {\n        t[e] = t.factory(e);\n      }), t.load = function(t) {\n        var e, n, o, i;\n        e = 3e5, i = Math.ceil(new Date() / e) * e, o = document.createElement("script"),\n        o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js",\n        n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);\n      });\n    }();\n    drift.SNIPPET_VERSION = \'0.3.1\';\n    drift.load(\'ustfpvutweuz\');\n    </script>\n    <!-- End of Async Drift Code -->\n  </head>\n  <body>\n    <div id="main"><!-- ::App:: --></div>\n  </body>\n</html>\n';

var app = (0, _express2.default)();

app.get('*', function (req, res) {
  console.log('express server working');
  var client = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));
  var html = index.replace('<!-- ::App:: -->', client);
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.send(html);
});

var pixart = exports.pixart = functions.https.onRequest(app);