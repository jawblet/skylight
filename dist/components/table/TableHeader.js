"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TableHeader = (_ref) => {
  let {
    headings
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, headings.map(label => {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: label,
      className: "table__cell heavy"
    }, label);
  })));
};

var _default = TableHeader;
exports.default = _default;