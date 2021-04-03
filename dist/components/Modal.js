"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = exports.ModalComponent = void 0;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireWildcard(require("react"));

var _CloseButton = _interopRequireDefault(require("./atoms/CloseButton"));

var _Flex = _interopRequireDefault(require("./layout/Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ModalComponent = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_Flex.default, {
    column: true,
    gap: 1.5,
    width: "100%"
  }, /*#__PURE__*/_react.default.createElement(_CloseButton.default, {
    handleClose: props.handleClose,
    className: "modal__X"
  }), /*#__PURE__*/_react.default.createElement("h3", null, props.title), /*#__PURE__*/_react.default.createElement("p", null, props.text), props.children || /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingBottom: '1.5rem'
    }
  })));
});
exports.ModalComponent = ModalComponent;

const Modal = props => {
  (0, _react.useEffect)(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__background"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }, /*#__PURE__*/_react.default.createElement(ModalComponent, _extends({
    ref: props.nodeRef
  }, props))));
};

exports.Modal = Modal;