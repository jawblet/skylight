"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Accordion.css");

require("../_global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AccordionDropdown = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion__list",
    style: props.style
  }, props.children);
};

var _default = AccordionDropdown;
exports.default = _default;