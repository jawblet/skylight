"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Tree = _interopRequireDefault(require("./atoms/Tree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BreadCrumbs = (_ref) => {
  let {
    crumbs
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Tree.default, {
    label: "Breadcrumbs"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "breadcrumbs"
  }, crumbs.map((el, i) => {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "".concat(el.path),
      key: i,
      className: "crumb"
    }, /*#__PURE__*/_react.default.createElement("h4", null, el.label), i + 1 !== crumbs.length && /*#__PURE__*/_react.default.createElement("h4", null, "/"));
  })));
};

var _default = BreadCrumbs;
exports.default = _default;