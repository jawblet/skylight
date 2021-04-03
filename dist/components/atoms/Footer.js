"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Flex = _interopRequireDefault(require("../layout/Flex"));

var _Button = _interopRequireDefault(require("../btn/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Footer = (_ref) => {
  let {
    primary,
    secondary
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    width: "100%",
    right: true,
    gap: 3
  }, secondary && /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: secondary.label,
    kind: secondary.kind || 'inline'
  }), primary && /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: primary.label,
    kind: primary.kind || 'primary'
  }));
};

var _default = Footer;
exports.default = _default;