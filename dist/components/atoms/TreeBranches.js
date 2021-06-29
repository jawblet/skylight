"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _TreeContext = require("../../../hooks/TreeContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const TreeBranches = (_ref) => {
  let {
    tag
  } = _ref,
      props = _objectWithoutProperties(_ref, ["tag"]);

  const {
    tree
  } = (0, _react.useContext)(_TreeContext.TreeContext);
  const [branch, showBranch] = (0, _react.useState)(false);

  if (!tree) {
    return props.children;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: branch ? 'treebranch' : '',
    style: {
      width: props.width,
      height: props.height
    },
    onMouseEnter: () => showBranch(true),
    onMouseLeave: () => showBranch(false)
  }, branch && /*#__PURE__*/_react.default.createElement("code", {
    className: "tree__name ".concat(props.left ? 'tree__name--left' : "", "\n                                                ").concat(props.bottom ? 'tree__name--bottom' : "")
  }), props.children);
};

var _default = TreeBranches;
exports.default = _default;