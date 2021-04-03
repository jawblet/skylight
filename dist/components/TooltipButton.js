"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _IconButton = _interopRequireDefault(require("./btn/IconButton"));

var _Tooltip = _interopRequireDefault(require("./Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const TooltipButton = (_ref) => {
  let {
    getTooltip,
    hideTooltip,
    tooltips,
    text,
    id
  } = _ref,
      props = _objectWithoutProperties(_ref, ["getTooltip", "hideTooltip", "tooltips", "text", "id"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tooltipBtn",
    "data-id": id,
    onMouseEnter: getTooltip,
    onMouseLeave: hideTooltip,
    onClick: props.handleClick
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, null), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    text: text,
    direction: props.direction,
    show: tooltips[id]
  }));
};

var _default = TooltipButton;
exports.default = _default;