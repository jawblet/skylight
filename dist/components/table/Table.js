"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _TableHeader = _interopRequireDefault(require("./TableHeader"));

var _Cell = _interopRequireDefault(require("./Cell"));

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
  }), /*#__PURE__*/_react.default.createElement("tbody", null, rows.map((el, i) => {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_Cell.default, null, el.name), /*#__PURE__*/_react.default.createElement(_Cell.default, null, el.id), /*#__PURE__*/_react.default.createElement(_Cell.default, null, el.description), /*#__PURE__*/_react.default.createElement(_Cell.default, null, el.date));
  })));
};

var _default = Table;
exports.default = _default;