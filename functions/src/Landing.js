'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tools = require('./tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Landing = function (_Component) {
  _inherits(Landing, _Component);

  function Landing() {
    _classCallCheck(this, Landing);

    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this));

    _this.goToCanvas = function (e) {
      e.preventDefault();
      var canvasId = _this.canvasInput.value;
      _this.props.history.push('/canvas/' + canvasId);
    };

    _this.goToCanvas = _this.goToCanvas.bind(_this);
    return _this;
  }

  _createClass(Landing, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'row center-xs' },
        _react2.default.createElement(
          'div',
          { className: 'paper col-xs-12 col-sm-10' },
          _react2.default.createElement(
            'form',
            { className: 'formEdit', onSubmit: function onSubmit(e) {
                return _this2.goToCanvas(e);
              } },
            _react2.default.createElement(
              'h2',
              null,
              'Name the Canvas'
            ),
            _react2.default.createElement('input', { type: 'text', required: true, placeholder: 'Canvas Name', defaultValue: (0, _tools.getFunName)(), ref: function ref(input) {
                _this2.canvasInput = input;
              } }),
            _react2.default.createElement(
              'button',
              { type: 'submit' },
              'Start!'
            )
          )
        )
      );
    }
  }]);

  return Landing;
}(_react.Component);

Landing.propTypes = {
  history: _propTypes2.default.object.isRequired
};
exports.default = Landing;