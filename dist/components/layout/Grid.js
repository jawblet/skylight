"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Grid = props => {
  const getGrid = props => {
    const {
      columns,
      rows,
      gap,
      justify,
      align,
      width,
      inline
    } = props;
    return {
      display: inline ? "inline-grid" : "grid",
      gap: "".concat(gap, "rem") || "0",
      gridTemplateColumns: columns || "none",
      gridTemplateRows: rows || "none",
      justifyItems: justify || "stretch",
      alignItems: align || "stretch",
      width: width || "100%"
    };
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: getGrid(props),
    className: props.className
  }, props.children);
};

var _default = Grid;
exports.default = _default;