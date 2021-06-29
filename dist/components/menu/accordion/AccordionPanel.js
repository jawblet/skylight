"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const AccordionPanel = (_ref) => {
  let {
    panel
  } = _ref,
      props = _objectWithoutProperties(_ref, ["panel"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion",
    key: panel.label
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    className: "accordion__input",
    id: "".concat(panel.label),
    defaultChecked: panel.checked || false
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "accordion__label",
    htmlFor: "".concat(panel.label)
  }, /*#__PURE__*/_react.default.createElement("h4", null, panel.label)), /*#__PURE__*/_react.default.createElement("menu", {
    className: "accordion__list"
  }, props.children));
};

var _default = AccordionPanel;
exports.default = _default;