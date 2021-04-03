"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Codeblock = (_ref) => {
  let {
    code,
    lang
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "codeblock"
  }, /*#__PURE__*/_react.default.createElement("pre", {
    className: "line-numbers"
  }, /*#__PURE__*/_react.default.createElement("code", {
    className: "language-".concat(lang)
  }, code)));
};

var _default = Codeblock;
exports.default = _default;