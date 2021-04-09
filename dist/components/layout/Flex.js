"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Flex = props => {
  //initialize axis
  let mainAxis = "flex-start";
  let crossAxis = "stretch";

  const getFlex = props => {
    const {
      inline,
      // flex or flex-inline  
      column,
      // row or column 
      left,
      // justify-content: start 
      center,
      // justify-content: middle
      right,
      // justify-content: right
      between,
      // justify-content: space-between
      around,
      // justify-content: space-around
      top,
      // align-items: start 
      middle,
      // align-items: center 
      bottom,
      // align-items: end 
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
    className: props.className
  }, props.children);
};

var _default = Flex;
exports.default = _default;