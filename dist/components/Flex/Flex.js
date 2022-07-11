"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Flex = props => {
  let mainAxis;
  let crossAxis;

  const getFlex = props => {
    const {
      inline,
      column,
      left,
      center,
      right,
      between,
      around,
      top,
      middle,
      bottom,
      gap
    } = props;

    if (left || center || right || between || around) {
      if (left) {
        mainAxis = "flex-start";
      } else if (center) {
        mainAxis = "center";
      } else if (right) {
        mainAxis = "flex-end";
      } else if (between) {
        mainAxis = "space-between";
      } else if (around) {
        mainAxis = "space-around";
      }
    }

    if (top || middle || bottom) {
      if (top) {
        crossAxis = "flex-start";
      } else if (middle) {
        crossAxis = "center";
      } else if (bottom) {
        crossAxis = "flex-end";
      } else {
        crossAxis = "stretch";
      }
    } // if vertical flip it


    if (column) {
      if (left || center || right) {
        if (left) {
          crossAxis = "flex-start";
        } else if (center) {
          crossAxis = "center";
        } else if (right) {
          crossAxis = "flex-end";
        }
      }

      if (top || middle || bottom || between || around) {
        if (top) {
          mainAxis = "flex-start";
        } else if (middle) {
          mainAxis = "center";
        } else if (bottom) {
          mainAxis = "flex-end";
        } else if (between) {
          mainAxis = "space-between";
        } else if (around) {
          mainAxis = "space-around";
        }
      }
    }

    return {
      display: inline ? "inline-flex" : "flex",
      flexDirection: props.column ? "column" : "row",
      flexWrap: props.wrap ? "wrap" : "nowrap",
      justifyContent: mainAxis,
      alignItems: crossAxis,
      width: props.width,
      height: props.height,
      gap: "".concat(gap, "rem"),
      position: 'relative'
    };
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: getFlex(props),
    className: props.className,
    "data-id": props.id,
    onClick: props.handleClick
  }, props.children);
};

Flex.propTypes = {
  /** Flex or inline-flex  */
  inline: _propTypes.PropTypes.bool,

  /** Row or column */
  column: _propTypes.PropTypes.bool,

  /** Wrap or no wrap */
  wrap: _propTypes.PropTypes.bool,

  /** Justify-content: start  */
  left: _propTypes.PropTypes.bool,

  /** Justify-content: center */
  center: _propTypes.PropTypes.bool,

  /** Justify-content: right */
  right: _propTypes.PropTypes.bool,

  /** Justify-content: space-between */
  between: _propTypes.PropTypes.bool,

  /**  Justify-content: space-around */
  around: _propTypes.PropTypes.bool,

  /**  Align-items: start */
  top: _propTypes.PropTypes.bool,

  /** Align-items: center */
  middle: _propTypes.PropTypes.bool,

  /** Align-items: end  */
  bottom: _propTypes.PropTypes.bool,

  /** Gap */
  gap: _propTypes.PropTypes.number,

  /** Height */
  height: _propTypes.PropTypes.string,

  /** Width */
  width: _propTypes.PropTypes.string,

  /** Function to call onClick*/
  handleClick: _propTypes.PropTypes.func,

  /** Data id */
  id: _propTypes.PropTypes.node,

  /** Custom classname */
  className: _propTypes.PropTypes.string
};
Flex.defaultProps = {
  inline: false,
  column: false,
  wrap: false,
  gap: 0
};
var _default = Flex;
exports.default = _default;