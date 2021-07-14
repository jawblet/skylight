"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Flex = _interopRequireDefault(require("../layout/Flex"));

var _propTypes = require("prop-types");

require("./Checkbox.css");

require("../_global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Check = props => {
  var _props$className;

  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    middle: true,
    className: "checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: props.id,
    value: props.value,
    className: "checkbox--".concat(props.size, " checkbox--hidden \n                                ").concat((_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : ''),
    defaultChecked: props.checked,
    disabled: props.disabled,
    style: props.style
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "checkbox--".concat(props.size, " checkbox--visible")
  }));
};

const Checkbox = props => {
  if (!props.label) {
    return /*#__PURE__*/_react.default.createElement(Check, props);
  }

  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    middle: true
  }, /*#__PURE__*/_react.default.createElement(Check, props), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: props.id,
    className: "checkbox__label"
  }, " ", props.label));
};

Checkbox.propTypes = {
  /** Box label */
  label: _propTypes.PropTypes.string,

  /** Box size */
  size: _propTypes.PropTypes.oneOf(["big", "small"]),

  /** Checkbox and label id */
  id: _propTypes.PropTypes.string,

  /** Value */
  value: _propTypes.PropTypes.string,

  /** If the default state is checked or not */
  checked: _propTypes.PropTypes.bool,

  /** Disabled state */
  disabled: _propTypes.PropTypes.bool,

  /** Custom classname */
  className: _propTypes.PropTypes.string,

  /** Custom styles */
  style: _propTypes.PropTypes.object
};
Checkbox.defaultProps = {
  checked: true,
  size: "small"
};
var _default = Checkbox;
exports.default = _default;