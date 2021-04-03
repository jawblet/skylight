"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Prompt;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Prompt(props) {
  return /*#__PURE__*/_react.default.createElement("h5", {
    className: "prompt"
  }, props.prompt);
}