"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Flex = _interopRequireDefault(require("../layout/Flex"));

var _autosize = _interopRequireDefault(require("autosize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Textarea = props => {
  const descriptionRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (props.autosize === false) {
      return null;
    }

    return (0, _autosize.default)(descriptionRef.current);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    column: true
  }, props.label && /*#__PURE__*/_react.default.createElement("h6", {
    style: {
      marginLeft: '0.5rem'
    }
  }, props.label), /*#__PURE__*/_react.default.createElement("textarea", {
    type: "text",
    ref: descriptionRef,
    className: "input",
    name: props.name,
    value: props.value,
    placeholder: props.placeholder,
    disabled: props.disabled,
    onClick: props.handleClickIn,
    onBlur: props.handleBlur,
    onChange: props.handleChange,
    onKeyDown: props.handleKeyDown,
    rows: props.rows,
    style: props.style
  }));
};

var _default = Textarea;
exports.default = _default;