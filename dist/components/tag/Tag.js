"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SandTag = exports.AccentTag = exports.Tag = void 0;

var _react = _interopRequireDefault(require("react"));

var _vsc = require("react-icons/vsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const accent = {
  backgroundColor: "var(--accent)",
  color: "var(--accent3)"
};
const sand = {
  backgroundColor: "var(--sand2)",
  color: "var(--body-light)"
};

const Tag = (_ref) => {
  let {
    color,
    bg,
    chip
  } = _ref,
      props = _objectWithoutProperties(_ref, ["color", "bg", "chip"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tag",
    style: {
      backgroundColor: bg,
      color: color
    }
  }, props.children, chip && /*#__PURE__*/_react.default.createElement(_vsc.VscClose, {
    className: "tag__X",
    onClick: props.handleClick,
    style: {
      color: color
    }
  }));
};

exports.Tag = Tag;

const AccentTag = (_ref2) => {
  let {
    chip
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["chip"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tag",
    style: accent
  }, props.children, chip && /*#__PURE__*/_react.default.createElement(_vsc.VscClose, {
    className: "tag__X",
    onClick: props.handleClick,
    style: {
      color: accent.color
    }
  }));
};

exports.AccentTag = AccentTag;

const SandTag = (_ref3) => {
  let {
    chip
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["chip"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tag",
    style: sand
  }, props.children, chip && /*#__PURE__*/_react.default.createElement(_vsc.VscClose, {
    className: "tag__X",
    onClick: props.handleClick
  }));
};

exports.SandTag = SandTag;