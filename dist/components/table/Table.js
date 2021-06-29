"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TableHeader = _interopRequireDefault(require("./TableHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Table = (_ref) => {
  let {
    rows,
    headings
  } = _ref,
      props = _objectWithoutProperties(_ref, ["rows", "headings"]);

  return /*#__PURE__*/_react.default.createElement("table", {
    className: "table",
    style: {
      gridTemplateColumns: props.columns
    }
  }, /*#__PURE__*/_react.default.createElement(_TableHeader.default, {
    headings: headings
  }), /*#__PURE__*/_react.default.createElement("tbody", null, props.children));
};

var _default = Table;
exports.default = _default;