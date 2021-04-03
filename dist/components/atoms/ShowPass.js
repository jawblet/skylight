"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _wi = require("react-icons/wi");

var _Tree = _interopRequireDefault(require("./Tree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ShowPass = props => {
  return /*#__PURE__*/_react.default.createElement(_Tree.default, {
    label: "ShowPass"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "showPass"
  }, !props.show ? /*#__PURE__*/_react.default.createElement(_wi.WiMoonAltWaxingCrescent2, {
    className: "icon",
    onClick: props.handleShowPass
  }) : /*#__PURE__*/_react.default.createElement(_wi.WiMoonAltWaningGibbous2, {
    className: "icon",
    onClick: props.handleShowPass
  })));
};

var _default = ShowPass;
exports.default = _default;