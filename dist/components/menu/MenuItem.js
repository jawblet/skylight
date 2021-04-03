"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Item = (_ref) => {
  let {
    item
  } = _ref,
      props = _objectWithoutProperties(_ref, ["item"]);

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "menu__item ".concat(props.dropdown ? 'menu__item--dropdown' : ''),
    onClick: props.handleClick,
    "data-id": item.id
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