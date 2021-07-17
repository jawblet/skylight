"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTransitionGroup = require("react-transition-group");

require("./Blur.css");

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Blur = props => {
  return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: props.in,
    timeout: 150,
    classNames: "blur",
    unmountOnExit: true
  }, props.children);
};

Blur.propTypes = {
  /** When the transition comes in */
  in: _propTypes.PropTypes.bool.isRequired,

  /** Component children */
  children: _propTypes.PropTypes.node.isRequired
};
var _default = Blur;
exports.default = _default;