"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Flex = _interopRequireDefault(require("./layout/Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Badge = (_ref) => {
  let {
    value
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    center: true,
    middle: true,
    className: "badge ".concat(!value ? 'badge--none' : '', " ")
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "heavy"
  }, value || 0));
};

var _default = Badge;
exports.default = _default;