"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _skylightReact = require("skylight-react");

var _vsc = require("react-icons/vsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Post = props => {
  return /*#__PURE__*/_react.default.createElement(_skylightReact.Flex, {
    column: true,
    className: "post"
  }, /*#__PURE__*/_react.default.createElement(_skylightReact.Flex, {
    between: true,
    className: "padBottomS"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "light"
  }, props.author), /*#__PURE__*/_react.default.createElement(_skylightReact.Flex, {
    middle: true
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "lightest",
    style: {
      paddingRight: '1rem'
    }
  }, props.date), /*#__PURE__*/_react.default.createElement(_vsc.VscEllipsis, {
    className: "icon"
  }))), /*#__PURE__*/_react.default.createElement("p", null, props.text));
};

var _default = Post;
exports.default = _default;