"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

require("./Badge.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Badge = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "badge ".concat(!props.value ? 'badge--none' : '', " \n                ").concat(props.className),
    onClick: props.handleClick,
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "heavy badge__number"
  }, props.value));
});
Badge.propTypes = {
  /** Custom classname */
  className: _propTypes.PropTypes.string,

  /** Function to call onClick*/
  handleClick: _propTypes.PropTypes.func,

  /** Number to display in badge */
  value: _propTypes.PropTypes.number
};
Badge.defaultProps = {
  value: 0
};
var _default = Badge;
exports.default = _default;