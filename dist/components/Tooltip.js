"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Tooltip = props => {
  const {
    text,
    direction,
    show
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, show && /*#__PURE__*/_react.default.createElement("div", {
    className: "tltp tltp--".concat(direction || 'top'),
    style: props.style
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "tltp__text"
  }, text)));
};

var _default = Tooltip; //tooltip + tag are the same?

exports.default = _default;