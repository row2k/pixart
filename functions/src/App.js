'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Landing = require('./Landing');

var _Landing2 = _interopRequireDefault(_Landing);

var _Canvas = require('./Canvas');

var _Canvas2 = _interopRequireDefault(_Canvas);

var _NotFound = require('./NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import PropTypes from 'prop-types'; //preferred method ^React@15.5


var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'root' },
        _react2.default.createElement(
          'div',
          { className: 'header' },
          _react2.default.createElement(
            'h1',
            null,
            'Pixart'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'nav' },
          _react2.default.createElement(_reactRouterDom.Route, { path: '/canvas/:canvasId', render: function render() {
              return _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'navLink', to: '/' },
                'Create a New Canvas'
              );
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'appWrapper fullScreenFlexCenter' },
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Landing2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/canvas/:canvasId', component: _Canvas2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;