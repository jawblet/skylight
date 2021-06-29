"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Flex = _interopRequireDefault(require("../layout/Flex"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Input.css");

require("../_global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Input = props => {
  const inputRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (props.autofocus) {
      inputRef.current.focus();
    }
  }, [props.autofocus]);
  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    column: true
  }, props.label && /*#__PURE__*/_react.default.createElement("h6", {
    style: {
      marginLeft: '0.5rem'
    }
  }, props.label), /*#__PURE__*/_react.default.createElement(_Flex.default, null, /*#__PURE__*/_react.default.createElement("input", {
    type: props.type,
    className: "input ".concat(props.inline ? 'input--inline' : '', "\n                            ").concat(props.fail ? "input--fail" : '', "\n                            ").concat(props.className),
    placeholder: props.placeholder,
    disabled: props.disabled,
    name: props.name,
    value: props.value,
    onChange: props.handleChange,
    onKeyDown: props.handleKeyDown,
    onClick: props.handleClickIn,
    onBlur: props.handleBlur,
    size: props.size,
    readOnly: props.readOnly,
    style: props.style
  })));
};

Input.propTypes = {
  /** Textarea label */
  label: _propTypes.default.string.isRequired,

  /** If the textarea is inline */
  inline: _propTypes.default.bool,

  /** Failed state */
  fail: _propTypes.default.bool,

  /** Size */
  size: _propTypes.default.number,

  /** Name */
  name: _propTypes.default.string,

  /** Value */
  name: _propTypes.default.string,

  /** Placeholder */
  placeholder: _propTypes.default.string,

  /** Disabled state */
  disabled: _propTypes.default.bool,

  /** Read-only state */
  fail: _propTypes.default.bool,

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

  /** Custom styles */
  style: _propTypes.default.object
};
var _default = Input;
/*
  {props.showPass && 
    <ShowPass {...props}/>} 
*/

exports.default = _default;