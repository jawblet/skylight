"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IconButton = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn icon ".concat(props.inline ? 'btn--inline' : '', "\n                                ").concat(props.active ? 'btn--active' : '', "\n                                ").concat(props.warning ? 'btn--warning' : '', "\n                                ").concat(props.className),
    onClick: props.handleClick,
    "data-id": props.dataId,
    style: props.style
  }, props.icon, props.children);
};

var _default = IconButton;
exports.default = _default;