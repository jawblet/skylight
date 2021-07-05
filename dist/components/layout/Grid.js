"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

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

Grid.propTypes = {
  /** Grid or inline-grid  */
  inline: _propTypes.PropTypes.bool,

  /** Columns, ex. "minmax(10px, 1fr) 3fr", "repeat(5, 1fr)" */
  columns: _propTypes.PropTypes.string,

  /** Rows, ex. "min-content 1fr min-content", "15rem 1fr" */
  rows: _propTypes.PropTypes.string,

  /** Align items along grid main axis */
  justify: _propTypes.PropTypes.oneOf(['start', 'end', 'center', 'stretch']),

  /** Align items along grid cross axis*/
  align: _propTypes.PropTypes.oneOf(['start', 'end', 'center', 'stretch']),

  /** Gap */
  gap: _propTypes.PropTypes.number,

  /** Width */
  width: _propTypes.PropTypes.string,

  /** Custom classname */
  className: _propTypes.PropTypes.string
};
/*
Grid.defaultProps = {
    columns: "none",
    rows: "none",
    justify: "stretch",
    align: "stretch",
    inline: false,
    width: "100%",
    gap: 0
}
*/

var _default = Grid;
exports.default = _default;