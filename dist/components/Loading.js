"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Loading = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "loading"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "animated-background"
  }));
};

var _default = Loading;
exports.default = _default;