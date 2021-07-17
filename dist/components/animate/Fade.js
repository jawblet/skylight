"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTransitionGroup = require("react-transition-group");

require("./Fade.css");

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Fade = props => {
  return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: props.in,
    timeout: props.short ? 150 : 350,
    classNames: "fade",
    exit: props.exit,
    enter: props.enter,
    unmountOnExit: true
  }, props.children);
};

Fade.propTypes = {
  /** When the transition comes in */
  in: _propTypes.PropTypes.bool.isRequired,

  /** Component children */
  children: _propTypes.PropTypes.node.isRequired
};
var _default = Fade;
exports.default = _default;