"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ButtonBar = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "buttonbar ".concat(props.column ? 'buttonbar--column' : 'buttonbar--row'),
    style: props.style
  }, props.children);
};

var _default = ButtonBar;
exports.default = _default;