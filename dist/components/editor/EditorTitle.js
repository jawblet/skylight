"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EditorTitle = props => {
  if (!props.title) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "editor__title",
    value: props.title,
    onChange: props.onTitleChange,
    onKeyDown: e => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    }
  });
};

var _default = EditorTitle;
exports.default = _default;