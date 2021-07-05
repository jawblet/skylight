"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Button.css");

require("../_global.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IconButton = props => {
  // this is Hot Mess 
  return /*#__PURE__*/_react.default.createElement("button", {
    type: props.type,
    className: "iconbutton ".concat(props.kind, "\n                                ").concat(props.className),
    onClick: props.handleClick,
    onMouseEnter: props.handleMouseEnter,
    onMouseLeave: props.handleMouseLeave,
    "data-id": props.id,
    style: props.style
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "icon"
  }, props.icon, props.children));
};

IconButton.propTypes = {
  /** Button style */
  kind: _propTypes.default.oneOf(["fill", "empty", "active", "warning"]),

  /** Function of button */
  type: _propTypes.default.oneOf(["button", "submit", "reset"]),

  /** Function to call onClick*/
  handleClick: _propTypes.default.func,

  /** Function to call oneMouseEnter*/
  handleMouseEnter: _propTypes.default.func,

  /** Function to call oneMouseLeave*/
  handleMouseLeave: _propTypes.default.func,

  /** Disabled state */
  disabled: _propTypes.default.bool,

  /** Data id */
  id: _propTypes.default.node,

  /** Custom classname */
  className: _propTypes.default.string,

  /** Custom styles */
  style: _propTypes.default.object
};
IconButton.defaultProps = {
  kind: "empty",
  disabled: false,
  type: "button"
};
var _default = IconButton;
exports.default = _default;