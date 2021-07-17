"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

require("./Banner.css");

require("../_global.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import Fade from './animate/Fade';
// position abs in a few places 
const Banner = props => {
  const [show, setShow] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (props.in) {
      setShow(true);
      setTimeout(() => setShow(false), props.timeout);
    }
  }, [props.in]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, show && /*#__PURE__*/_react.default.createElement("div", {
    className: "banner banner--".concat(props.type),
    style: props.style
  }, /*#__PURE__*/_react.default.createElement("h5", null, props.text)));
};

Banner.propTypes = {
  /** Trigger banner entry */
  in: _propTypes.PropTypes.bool.isRequired,

  /** Timeout in milliseconds before Banner disappears */
  timeout: _propTypes.PropTypes.number,

  /** Banner type */
  type: _propTypes.PropTypes.oneOf(['info', 'error', 'success']),

  /** Banner text */
  text: _propTypes.PropTypes.string.isRequired,

  /** Styles */
  style: _propTypes.PropTypes.object
};
Banner.defaultProps = {
  timeout: 5000,
  type: "info"
};
var _default = Banner;
exports.default = _default;