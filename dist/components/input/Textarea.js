"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Flex = _interopRequireDefault(require("../layout/Flex"));

var _autosize = _interopRequireDefault(require("autosize"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Input.css");

require("../_global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Textarea = props => {
  const descriptionRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (props.autosize === false) {
      return null;
    }

    return (0, _autosize.default)(descriptionRef.current);
  }, [props.autosize]);
  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    column: true,
    width: props.width
  }, props.label && /*#__PURE__*/_react.default.createElement("h6", {
    style: {
      marginLeft: '0.5rem'
    }
  }, props.label), /*#__PURE__*/_react.default.createElement("textarea", {
    type: "text",
    ref: descriptionRef,
    className: "input ".concat(props.inline ? 'input--inline' : '', "\n                ").concat(props.fail ? "input--fail" : '', "\n                ").concat(props.className),
    name: props.name,
    value: props.value,
    placeholder: props.placeholder,
    disabled: props.disabled,
    readOnly: props.readOnly,
    onClick: props.handleClickIn,
    onBlur: props.handleBlur,
    onChange: props.handleChange,
    onKeyDown: props.handleKeyDown,
    rows: props.rows,
    style: props.style
  }));
};

Textarea.propTypes = {
  /** Textarea label */
  label: _propTypes.default.string,

  /** If the textarea is inline */
  inline: _propTypes.default.bool,

  /** Failed state */
  fail: _propTypes.default.bool,

  /** Number of initial rows */
  rows: _propTypes.default.number,

  /** Name */
  name: _propTypes.default.string,

  /** Value */
  value: _propTypes.default.string,

  /** Placeholder */
  placeholder: _propTypes.default.string,

  /** Disabled state */
  disabled: _propTypes.default.bool,

  /** Read-only state */
  readOnly: _propTypes.default.bool,

  /** Function to call onClick*/
  handleClick: _propTypes.default.func,

  /** Function to call onBlur*/
  handleBlur: _propTypes.default.func,

  /** Function to call onKeydown*/
  handleKeyDown: _propTypes.default.func,

  /** Function to call onChange*/
  handleChange: _propTypes.default.func,

  /** Custom classname */
  className: _propTypes.default.string,

  /** Width */
  width: _propTypes.default.string,

  /** Custom styles */
  style: _propTypes.default.object
};
Textarea.defaultProps = {
  rows: 1
};
var _default = Textarea;
exports.default = _default;