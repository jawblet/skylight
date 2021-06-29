"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Flex = _interopRequireDefault(require("../layout/Flex"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Loader.css");

require("../_global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Loader = props => {
  Loader.propTypes = {
    /** Inline or full-page */
    inline: _propTypes.default.bool
  };
  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    middle: true,
    center: true,
    width: "100%",
    height: props.inline ? "100%" : "80vh"
  }, /*#__PURE__*/_react.default.createElement("code", null, "loading...\xA0 "), /*#__PURE__*/_react.default.createElement("span", {
    className: "loading__cursor"
  }));
};

var _default = Loader;
exports.default = _default;