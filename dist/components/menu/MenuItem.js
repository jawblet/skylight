"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Menu.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Item = props => {
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "menu__item \n            ".concat(props.dropdown ? 'menu__item--dropdown' : '', " \n            ").concat(props.active ? 'menu__item--active' : '', " "),
    onClick: props.handleClick,
    value: props.value,
    style: props.style
  }, props.children);
};

const MenuItem = props => {
  if (props.nav) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
      to: props.path,
      activeClassName: "menu__item--active"
    }, /*#__PURE__*/_react.default.createElement(Item, props));
  }

  if (props.link) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: props.path
    }, /*#__PURE__*/_react.default.createElement(Item, props));
  }

  return /*#__PURE__*/_react.default.createElement(Item, props);
};

MenuItem.propTypes = {
  /**If the item is a <NavLink/>*/
  nav: _propTypes.default.bool,

  /**If the item is a <Link/> */
  link: _propTypes.default.bool,

  /**If the item is a part of a dropdown menu*/
  dropdown: _propTypes.default.bool,

  /**If the item is active*/
  active: _propTypes.default.bool,

  /** Function to call onClick */
  handleClick: _propTypes.default.func,

  /** Component value */
  value: _propTypes.default.node,

  /** Custom classname */
  className: _propTypes.default.string,

  /** Custom styles */
  style: _propTypes.default.object,

  /** Component's children */
  children: _propTypes.default.node.isRequired
};
var _default = MenuItem;
exports.default = _default;