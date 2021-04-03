"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _vsc = require("react-icons/vsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CloseButton = props => {
  return /*#__PURE__*/_react.default.createElement(_vsc.VscClose, {
    className: "icon ".concat(props.className),
    onClick: props.handleClose,
    style: props.style
  });
};

var _default = CloseButton;
exports.default = _default;