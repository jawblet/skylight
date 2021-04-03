"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Flex = _interopRequireDefault(require("../layout/Flex"));

var _ShowPass = _interopRequireDefault(require("../atoms/ShowPass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Input = props => {
  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    column: true
  }, props.label && /*#__PURE__*/_react.default.createElement("h6", {
    style: {
      marginLeft: '0.5rem'
    }
  }, props.label), /*#__PURE__*/_react.default.createElement(_Flex.default, null, /*#__PURE__*/_react.default.createElement("input", {
    type: props.type,
    className: "input ".concat(props.inline ? 'input--inline' : '', "\n                            ").concat(props.fail ? "input--fail" : '', " "),
    placeholder: props.placeholder,
    disabled: props.disabled,
    name: props.name,
    value: props.value,
    onChange: props.handleChange,
    onKeyDown: props.handleKeyDown,
    onClick: props.handleClickIn,
    onBlur: props.handleBlur,
    style: props.style
  }), props.showPass && /*#__PURE__*/_react.default.createElement(_ShowPass.default, props)));
};

var _default = Input;
exports.default = _default;