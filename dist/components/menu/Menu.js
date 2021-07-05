"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Menu.css");

require("../_global.css");

const _excluded = ["items"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Menu = _ref => {
  let {
    items
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  Menu.propTypes = {
    /** Custom classname */
    className: _propTypes.default.string,

    /** Custom styles */
    style: _propTypes.default.object,

    /** Component's children */
    children: _propTypes.default.node
  };
  return /*#__PURE__*/_react.default.createElement("menu", {
    className: "menu ".concat(props.className),
    style: props.style
  }, props.children);
};

var _default = Menu;
exports.default = _default;