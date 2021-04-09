"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Item = props => {
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "menu__item ".concat(props.dropdown ? 'menu__item--dropdown' : ''),
    onClick: props.handleClick,
    "data-id": props.item.id || props.id
  }, props.children);
};

const MenuItem = props => {
  if (props.nav) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
      to: props.item.path,
      activeClassName: "menu__item--active"
    }, /*#__PURE__*/_react.default.createElement(Item, props));
  }

  if (props.link) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: props.item.path
    }, /*#__PURE__*/_react.default.createElement(Item, props));
  }

  return /*#__PURE__*/_react.default.createElement(Item, props);
};

var _default = MenuItem;
exports.default = _default;