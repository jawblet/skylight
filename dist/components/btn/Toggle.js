"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Flex = _interopRequireDefault(require("../layout/Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Toggle = props => {
  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    middle: true,
    gap: 1
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle ".concat(props.checked ? 'toggle--on' : ''),
    onClick: props.handleToggle,
    disabled: props.disabled
  }), /*#__PURE__*/_react.default.createElement("h4", null, props.label));
};

var _default = Toggle;
exports.default = _default;