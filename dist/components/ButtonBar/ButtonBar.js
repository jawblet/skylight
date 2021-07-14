"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./ButtonBar.css");

require("../_global.css");

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ButtonBar = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "buttonbar buttonbar--".concat(props.direction, "\n        ").concat(props.divide ? "buttonbar--divide" : '')
  }, props.children);
};

ButtonBar.propTypes = {
  /** Direction of button bar */
  direction: _propTypes.PropTypes.oneOf(["row", "column"]),

  /** Divide the buttons */
  divide: _propTypes.PropTypes.bool,

  /** Children */
  children: _propTypes.PropTypes.node.isRequired
};
ButtonBar.defaultProps = {
  direction: "row"
};
var _default = ButtonBar;
exports.default = _default;