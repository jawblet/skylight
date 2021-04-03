"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _Toolbar = _interopRequireDefault(require("./Toolbar"));

var _EditorTitle = _interopRequireDefault(require("./EditorTitle"));

var _Flex = _interopRequireDefault(require("../layout/Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RichEditor = props => {
  const editRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    editRef.current.focus();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    column: true,
    width: "100%"
  }, props.rich && /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    editorState: props.editorState,
    onToggleInline: props.toggleInlineStyle,
    toggleBlockType: props.toggleBlockType
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "editorWrapper ".concat(props.outline ? 'editorWrapper--outline' : '', " "),
    onClick: () => editRef.current.focus()
  }, props.showTitle && /*#__PURE__*/_react.default.createElement(_EditorTitle.default, {
    title: props.title
  }), /*#__PURE__*/_react.default.createElement(_draftJs.Editor, {
    editorState: props.editorState,
    ref: editRef,
    spellCheck: true,
    onChange: props.onNoteChange,
    handleKeyCommand: props.handleKeyCommand,
    mapKeyToEditorCommand: props.mapKeyToEditorCommand
  })));
};

var _default = RichEditor;
exports.default = _default;