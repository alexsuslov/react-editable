'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {
      edited: false
    };

    ['KeyDown', 'Click', 'Blur'].forEach(function (v) {
      _this['handle' + v] = _this['handle' + v].bind(_this);
    });
    return _this;
  }

  _createClass(Input, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      this.setState({ edited: !this.state.edited });
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.keyCode === 13) {
        if (this.props.onChange) {
          this.props.onChange(e);
        }
        this.setState({ edited: false });
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({ edited: false });
      }, 200);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.width = this.refs.span.offsetWidth;
      this.height = this.refs.span.offsetHeight;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          type = _props.type,
          value = _props.value;

      var _input = {
        name: name, type: type,
        defaultValue: value,
        onKeyDown: this.handleKeyDown,
        onBlur: this.handleBlur,
        style: {
          width: this.width,
          height: this.height
        }
      };
      return this.state.edited ? _react2.default.createElement('input', _extends({ autoFocus: true }, _input)) : _react2.default.createElement(
        'span',
        { ref: 'span',
          onDoubleClick: this.handleClick },
        value
      );
    }
  }]);

  return Input;
}(_react2.default.Component);

Input.propTypes = {
  onChange: _react2.default.PropTypes.func,
  name: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.string,

  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
};
exports.default = Input;