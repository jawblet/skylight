"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTransitionGroup = require("react-transition-group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SwitchFade = props => {
  return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.SwitchTransition, {
    mode: "out-in"
  }, /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    key: props.state,
    timeout: 350,
    classNames: "fade",
    addEndListener: (node, done) => {
      node.addEventListener("transitionend", done, false);
    }
  }, props.children));
};

var _default = SwitchFade;
exports.default = _default;