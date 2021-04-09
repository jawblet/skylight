"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _prismjs = _interopRequireDefault(require("prismjs"));

require("./_styles/assets/prism.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Codeblock = (_ref) => {
  let {
    code,
    lang
  } = _ref,
      props = _objectWithoutProperties(_ref, ["code", "lang"]);

  const [expand, setExpand] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    _prismjs.default.highlightAll();
  }, [code]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "codeblock",
    style: {
      maxHeight: expand ? '' : props.maxHeight
    }
  }, /*#__PURE__*/_react.default.createElement("pre", {
    className: "line-numbers"
  }, /*#__PURE__*/_react.default.createElement("code", {
    className: "language-".concat(lang)
  }, code)), props.maxHeight && /*#__PURE__*/_react.default.createElement("div", {
    className: "fade pointer",
    onClick: () => setExpand(!expand)
  }));
};

var _default = Codeblock;
exports.default = _default;