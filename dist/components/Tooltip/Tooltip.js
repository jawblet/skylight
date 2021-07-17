"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Tooltip.css");

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Tooltip = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.open && /*#__PURE__*/_react.default.createElement("div", {
    className: "tltp tltp--".concat(props.direction || 'top'),
    style: props.style
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "tltp__text"
  }, props.text)));
};

Tooltip.propTypes = {
  /** If tooltip appears */
  open: _propTypes.PropTypes.bool.isRequired,

  /** Tooltip orientation */
  direction: _propTypes.PropTypes.oneOf(['top', 'bottom', 'right', 'left']),

  /** Tooltip text */
  text: _propTypes.PropTypes.string.isRequired,

  /** Custom style */
  style: _propTypes.PropTypes.object
};
Tooltip.defaultProps = {
  direction: "top"
};
var _default = Tooltip;
exports.default = _default;