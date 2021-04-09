"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PageTitle = _interopRequireDefault(require("../../../atoms/PageTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TitledPage = props => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_PageTitle.default, {
    title: props.title,
    style: {
      marginBottom: '1.5rem'
    }
  }), props.children);
};

var _default = TitledPage;
exports.default = _default;