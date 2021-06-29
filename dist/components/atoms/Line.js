"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Line = props => {
  const getLine = col => {
    switch (col) {
      case 'menu':
        return 'var(--sand4)';

      case 'lightest':
        return 'var(--shadow)';

      default:
        return 'var(--body-lightest)';
    }
  };

  return /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      background: getLine(props.col),
      width: props.width
    },
    className: props.className,
    "data-id": props.id
  });
};

var _default = Line;
exports.default = _default;