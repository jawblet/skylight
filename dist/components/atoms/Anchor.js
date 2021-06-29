"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const Anchor = props => {
  return /*#__PURE__*/React.createElement("a", {
    href: props.to,
    target: "_blank",
    rel: "noreferrer",
    className: props.className
  }, props.children);
};

var _default = Anchor;
exports.default = _default;