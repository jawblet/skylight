"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Flex = _interopRequireDefault(require("../layout/Flex"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Toggle = props => {
  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    middle: true,
    gap: 1,
    className: props.className
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle ".concat(props.checked ? 'toggle--on' : ''),
    onClick: props.handleClick,
    disabled: props.disabled
  }), /*#__PURE__*/_react.default.createElement("h4", null, props.label));
};

Toggle.propTypes = {
  /** Toggle label */
  label: _propTypes.PropTypes.string,

  /** Initial checked state */
  checked: _propTypes.PropTypes.bool,

  /** Custom classname */
  className: _propTypes.PropTypes.string,

  /** Function to call onClick*/
  handleClick: _propTypes.PropTypes.func,

  /** Disabled state */
  disabled: _propTypes.PropTypes.bool
};
Toggle.defaultProps = {
  checked: true
};
var _default = Toggle;
exports.default = _default;