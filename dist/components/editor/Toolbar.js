"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Toolbar;

var _react = _interopRequireDefault(require("react"));

var _IconButton = _interopRequireDefault(require("../btn/IconButton"));

var _SelectMenu = _interopRequireDefault(require("../menu/SelectMenu"));

var _data = require("../../data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Toolbar(props) {
  const currentInlineStyle = props.editorState.getCurrentInlineStyle();
  const selection = props.editorState.getSelection();
  const blockType = props.editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

  const setBlockType = e => {
    e.preventDefault();
    props.toggleBlockType(e);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "toolbar ".concat(props.styled ? "toolbar--styled" : '')
  }, _data.INLINE_STYLES.map(type => {
    return (
      /*#__PURE__*/
      //this keeps the focus w/n the editor on inline style change
      _react.default.createElement("div", {
        "data-id": type.style,
        key: type.style,
        onMouseDown: e => {
          e.preventDefault();
          props.onToggleInline(e);
        }
      }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
        inline: true,
        key: type.label,
        icon: type.icon,
        active: currentInlineStyle.has(type.style),
        dataId: type.style
      }))
    );
  }), _data.BLOCK_TYPES.map(type => {
    return /*#__PURE__*/_react.default.createElement("div", {
      "data-id": type.style,
      key: type.style,
      onMouseDown: setBlockType
    }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      inline: true,
      icon: type.icon,
      active: type.style === blockType,
      dataId: type.style
    }));
  }), /*#__PURE__*/_react.default.createElement(_SelectMenu.default, {
    allItems: _data.HEADINGS,
    initValue: blockType.substring(0, 6) === 'header' ? blockType : 'paragraph',
    selectItem: setBlockType
  }));
}