"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Tabs.css");

require("../_global.css");

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Tab = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tab padS pointer ".concat(props.active ? 'tab--active' : ''),
    onClick: props.handleClick
  }, props.children);
};

Tab.propTypes = {
  /** Id used to set the active tab */
  id: _propTypes.PropTypes.node,

  /** Active state */
  active: _propTypes.PropTypes.bool,

  /** Handle click */
  handleClick: _propTypes.PropTypes.func,

  /** Component children */
  children: _propTypes.PropTypes.node.isRequired
};
var _default = Tab;
exports.default = _default;