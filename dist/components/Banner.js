"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Banner = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "banner banner--".concat(props.type)
  }, /*#__PURE__*/_react.default.createElement("h5", null, props.text));
};

var _default = Banner;
exports.default = _default;