"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Flex = _interopRequireDefault(require("../layout/Flex"));

require("./Tabs.css");

require("../_global.css");

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Tabs = props => {
  return /*#__PURE__*/_react.default.createElement(_Flex.default, null, props.children, /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs"
  }));
};

Tabs.propTypes = {
  /** <Tab/> children */
  children: _propTypes.PropTypes.node.isRequired
};
var _default = Tabs;
exports.default = _default;