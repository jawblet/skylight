"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Banner.css");

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Flag = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "banner banner--".concat(props.type),
    style: props.style
  }, /*#__PURE__*/_react.default.createElement("h5", null, props.text));
};

Flag.propTypes = {
  /** Banner type */
  type: _propTypes.PropTypes.oneOf(['info', 'error', 'success']),

  /** Banner text */
  text: _propTypes.PropTypes.string.isRequired,

  /** Styles */
  style: _propTypes.PropTypes.object
};
var _default = Flag;
exports.default = _default;