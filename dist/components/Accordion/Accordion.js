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

const Accordion = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion",
    style: {
      width: props.width
    }
  }, props.children);
};

Accordion.propTypes = {
  width: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.node.isRequired
};
var _default = Accordion;
exports.default = _default;