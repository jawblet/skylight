"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TableHeader = _interopRequireDefault(require("./TableHeader"));

var _Cell = _interopRequireDefault(require("./Cell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Table = (_ref) => {
  let {
    rows,
    headings
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("table", {
    className: "table"
  }, /*#__PURE__*/_react.default.createElement(_TableHeader.default, {
    headings: headings
  }), /*#__PURE__*/_react.default.createElement("tbody", null, rows.map((el, i) => {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i,
      className: "table__row"
    }, /*#__PURE__*/_react.default.createElement(_Cell.default, {
      label: el.prop,
      font: "code",
      highlight: "tag"
    }), /*#__PURE__*/_react.default.createElement(_Cell.default, {
      label: el.type,
      font: "code"
    }), /*#__PURE__*/_react.default.createElement("td", {
      className: "table__cell"
    }, /*#__PURE__*/_react.default.createElement("h5", null, el.note)));
  })));
};

var _default = Table;
exports.default = _default;