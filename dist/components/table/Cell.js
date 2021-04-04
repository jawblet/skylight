"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Cell = props => {
  return /*#__PURE__*/_react.default.createElement("td", {
    className: "table__cell"
  }, props.children);
};

var _default = Cell;
exports.default = _default;