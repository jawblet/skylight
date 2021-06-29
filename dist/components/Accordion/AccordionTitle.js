"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Accordion.css");

require("../_global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AccordionTitle = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    className: "accordion__input",
    id: props.label,
    defaultChecked: props.checked || false
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "accordion__label",
    htmlFor: props.label
  }, props.children));
};

var _default = AccordionTitle;
exports.default = _default;