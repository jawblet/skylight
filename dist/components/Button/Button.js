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
  Button.propTypes = {
    /** Button label */
    label: _propTypes.default.string.isRequired,

    /** Button style */
    kind: _propTypes.default.oneOf(["fill", "empty", "active", "warning"]),

    /** Function of button */
    type: _propTypes.default.oneOf(["button", "submit", "reset"]),

    /** If the button is a Call To Action, it will be rounder */
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
    kind: "empty",
    CTA: false,
    disabled: false,
    type: "button"
  };
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn--".concat(props.kind, " \n                    ").concat(props.CTA ? "CTA CTA--".concat(props.kind) : '', "\n                    ").concat(props.className),
    "data-id": props.id,
    type: props.type,
    name: props.name,
    value: props.value,
    disabled: props.disabled,
    onClick: props.handleClick,
    style: props.style
  }, props.label);
};

var _default = Button;
exports.default = _default;