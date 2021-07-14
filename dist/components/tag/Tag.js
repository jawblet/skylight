"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _vsc = require("react-icons/vsc");

var _propTypes = require("prop-types");

require("./Tag.css");

require("../_global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Tag = props => {
  var _props$kind, _props$className;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tag ".concat((_props$kind = props.kind) !== null && _props$kind !== void 0 ? _props$kind : "", " ").concat((_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : ""),
    style: {
      backgroundColor: props.bg,
      color: props.color
    }
  }, props.children, props.chip && /*#__PURE__*/_react.default.createElement(_vsc.VscClose, {
    className: "tag__X",
    onClick: props.handleClick,
    style: {
      color: props.color
    }
  }));
};

Tag.propTypes = {
  /** Background color */
  bg: _propTypes.PropTypes.string,

  /** Color */
  color: _propTypes.PropTypes.string,

  /** Children */
  children: _propTypes.PropTypes.node,

  /** Kind of tag style */
  kind: _propTypes.PropTypes.oneOf(['highlight', 'lowlight', 'neutral', 'dark']),

  /** If the tag is a chip */
  chip: _propTypes.PropTypes.bool,

  /** Function to call onClick */
  handleClick: _propTypes.PropTypes.func,

  /** Custom classname */
  className: _propTypes.PropTypes.string
};
Tag.defaultProps = {
  kind: 'neutral'
};
var _default = Tag;
exports.default = _default;