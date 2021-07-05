"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Button.css");

require("../_global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    type: props.type,
    className: "btn ".concat(props.kind, " \n                    ").concat(props.CTA ? "CTA CTA--".concat(props.kind) : '', "\n                    ").concat(props.className),
    "data-id": props.id,
    name: props.name,
    value: props.value,
    disabled: props.disabled,
    onClick: props.handleClick,
    style: props.style
  }, props.label);
};

Button.propTypes = {
  /** Button label */
  label: _propTypes.default.string.isRequired,

  /** Kind of button style */
  kind: _propTypes.default.oneOf(['highlight', 'lowlight', 'bright', 'neutral', 'empty', 'warning']),

  /** Function of button */
  type: _propTypes.default.oneOf(["button", "submit", "reset"]),

  /** CTA (Call To Action) buttons that prompt big actions have a rounder style */
  CTA: _propTypes.default.bool,

  /** Function to call onClick*/
  handleClick: _propTypes.default.func,

  /** Disabled state */
  disabled: _propTypes.default.bool,

  /** Data id */
  id: _propTypes.default.node,

  /** Custom classname */
  className: _propTypes.default.string,

  /** Custom styles */
  style: _propTypes.default.object
};
Button.defaultProps = {
  kind: "inline",
  CTA: false,
  disabled: false,
  type: "button"
};
var _default = Button;
exports.default = _default;