'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PixelLarge = require('./components/PixelLarge');

var _PixelLarge2 = _interopRequireDefault(_PixelLarge);

var _blankCanvasTest = require('./components/blankCanvasTest');

var _blankCanvasTest2 = _interopRequireDefault(_blankCanvasTest);

var _rebase = require('./rebase');

var _rebase2 = _interopRequireDefault(_rebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import PropTypes from 'prop-types';
// import { Router } from 'react-router';


//rebase for react binding, use base for vanilla firebase

var Canvas = function (_Component) {
  _inherits(Canvas, _Component);

  function Canvas(props) {
    _classCallCheck(this, Canvas);

    var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, props));

    _this.handlePixelMouseDown = function (e) {
      e.currentTarget.style.backgroundColor = _this.state.currentColor;
    };

    _this.state = {
      pixels: {},
      currentColor: "green"
    };
    return _this;
  }

  _createClass(Canvas, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      //this runs right before the <App> is rendered
      this.ref = _rebase2.default.syncState(this.props.match.params.canvasId + '/pixels', { context: this, state: 'pixels' });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _rebase2.default.fetch(this.props.match.params.canvasId + '/pixels', {
        context: this,
        asAray: true
      }).then(function (data) {
        if (!data[0]) {
          _this2.setState({
            pixels: _blankCanvasTest2.default
          });
        }
      }).catch(function (error) {
        console.log(error);
        return;
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _rebase2.default.removeBinding(this.ref);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('form', { action: '' }),
        _react2.default.createElement(
          'div',
          { className: 'app-wrapper paper canvas' },
          Object.keys(this.state.pixels).map(function (key) {
            return _react2.default.createElement(_PixelLarge2.default, { currentColor: _this3.state.currentColor, key: key, index: key, details: _this3.state.pixels[key] });
          })
        )
      );
    }
  }]);

  return Canvas;
}(_react.Component);

exports.default = Canvas;