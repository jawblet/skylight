"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Card.css");

require("../_global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Card = props => {
  Card.propTypes = {
    /** Custom classname */
    className: _propTypes.default.string,

    /** Custom styles */
    style: _propTypes.default.object,

    /** Component's children */
    children: _propTypes.default.node
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card ".concat(props.className),
    style: props.style
  }, props.children);
};

var _default = Card;
exports.default = _default;