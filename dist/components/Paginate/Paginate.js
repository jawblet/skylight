"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _vsc = require("react-icons/vsc");

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Paginate.css");

require("../_global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Paginate = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.totalPages && props.totalPages > 1 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "paginate"
  }, props.prevPage && /*#__PURE__*/_react.default.createElement(_vsc.VscArrowLeft, {
    className: "icon icon__btn paginate__L",
    onClick: () => props.handleBackClick()
  }), props.totalPages && props.totalPages > 1 && /*#__PURE__*/_react.default.createElement("h4", {
    className: "paginate__pg"
  }, props.page, " of ", props.totalPages), props.nextPage && /*#__PURE__*/_react.default.createElement(_vsc.VscArrowRight, {
    className: "icon icon__btn paginate__R",
    onClick: () => props.handleFrontClick()
  })) : null);
};

Paginate.propTypes = {
  /** Current page */
  page: _propTypes.default.number.isRequired,

  /** Total pages */
  totalPages: _propTypes.default.number.isRequired,

  /** If the previous page exists */
  prevPage: _propTypes.default.bool,

  /** If the next page exists */
  nextPage: _propTypes.default.bool,

  /** Function to call onClick */
  handleClick: _propTypes.default.func
};
var _default = Paginate;
exports.default = _default;