"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Flex = _interopRequireDefault(require("./Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Form = props => {
  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    column: true,
    gap: 1,
    width: props.width
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "center"
  }, props.title), /*#__PURE__*/_react.default.createElement("form", {
    className: "form"
  }, props.children));
};

var _default = Form;
exports.default = _default;