"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("./Accordion.css");

require("../_global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AccordionTitle = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    className: "accordion__input",
    id: props.id,
    defaultChecked: props.checked
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "accordion__label",
    htmlFor: props.id
  }, props.children));
};

AccordionTitle.propTypes = {
  /** Id to collapse/expand the correct panel */
  id: _propTypes.PropTypes.string.isRequired,

  /** If the panel is open or closed by default */
  defaultChecked: _propTypes.PropTypes.bool,

  /** Children */
  children: _propTypes.PropTypes.node.isRequired
};
AccordionTitle.defaultProps = {
  defaultChecked: false
};
var _default = AccordionTitle;
exports.default = _default;