"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Flex = _interopRequireDefault(require("./layout/Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Check = props => {
  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    middle: true,
    className: "checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: props.id,
    value: props.value,
    className: "checkbox--".concat(props.size, " checkbox--hidden"),
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

var _default = Checkbox;
exports.default = _default;