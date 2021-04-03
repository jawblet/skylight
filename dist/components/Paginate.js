"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _vsc = require("react-icons/vsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Paginate = props => {
  const {
    pageState,
    handleClick
  } = props;
  const {
    page,
    totalPages,
    prevPage,
    nextPage
  } = pageState;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, totalPages && totalPages > 1 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "paginate"
  }, prevPage && /*#__PURE__*/_react.default.createElement(_vsc.VscArrowLeft, {
    className: "icon icon__btn paginate__L",
    onClick: () => handleClick(page - 1)
  }), totalPages && totalPages > 1 && /*#__PURE__*/_react.default.createElement("h4", {
    className: "paginate__pg"
  }, page, " of ", totalPages), nextPage && /*#__PURE__*/_react.default.createElement(_vsc.VscArrowRight, {
    className: "icon icon__btn paginate__R",
    onClick: () => handleClick(page + 1)
  })) : null);
};

var _default = Paginate;
exports.default = _default;