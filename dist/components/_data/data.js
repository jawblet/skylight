"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BLOCK_TYPES = exports.INLINE_STYLES = exports.HEADINGS = void 0;

var _react = _interopRequireDefault(require("react"));

var _vsc = require("react-icons/vsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// for editor 
const HEADINGS = [{
  label: 'Paragraph',
  id: 'paragraph'
}, {
  label: 'H1',
  id: 'header-one'
}, {
  label: 'H2',
  id: 'header-two'
}, {
  label: 'H3',
  id: 'header-three'
}, {
  label: 'H4',
  id: 'header-four'
}, {
  label: 'H5',
  id: 'header-five'
}, {
  label: 'H6',
  id: 'header-six'
}];
exports.HEADINGS = HEADINGS;
const INLINE_STYLES = [{
  label: 'bold',
  style: 'BOLD',
  icon: /*#__PURE__*/_react.default.createElement(_vsc.VscBold, null)
}, {
  label: 'italic',
  style: 'ITALIC',
  icon: /*#__PURE__*/_react.default.createElement(_vsc.VscItalic, null)
}, {
  label: 'monospace',
  style: 'CODE',
  icon: /*#__PURE__*/_react.default.createElement(_vsc.VscCode, null)
}];
exports.INLINE_STYLES = INLINE_STYLES;
const BLOCK_TYPES = [{
  label: 'Blockquote',
  style: 'blockquote',
  icon: /*#__PURE__*/_react.default.createElement(_vsc.VscQuote, null)
}, {
  label: 'UL',
  style: 'unordered-list-item',
  icon: /*#__PURE__*/_react.default.createElement(_vsc.VscListUnordered, null)
}, {
  label: 'OL',
  style: 'ordered-list-item',
  icon: /*#__PURE__*/_react.default.createElement(_vsc.VscListOrdered, null)
}, {
  label: 'Code Block',
  style: 'code-block',
  icon: /*#__PURE__*/_react.default.createElement(_vsc.VscSymbolNamespace, null)
}];
exports.BLOCK_TYPES = BLOCK_TYPES;