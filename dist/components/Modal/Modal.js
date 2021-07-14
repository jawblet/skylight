"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _vsc = require("react-icons/vsc");

var _Flex = _interopRequireDefault(require("../layout/Flex"));

require("./Modal.css");

require("../_global.css");

var _propTypes = require("prop-types");

var _useDetectClick = _interopRequireDefault(require("./useDetectClick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//callback on close 
const Modal = props => {
  var _props$className;

  const backgroundZIndex = {
    zIndex: props.backgroundZIndex
  };
  const modalStyle = {
    zIndex: props.zIndex,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: props.height,
    width: props.width
  };
  const {
    nodeRef,
    show,
    setShow
  } = (0, _useDetectClick.default)();
  (0, _react.useEffect)(() => {
    if (props.open) {
      return setShow(true);
    }

    setShow(false);
  }, [props.open]);
  (0, _react.useEffect)(() => {
    document.body.style.overflow = 'hidden';
    props.onOpen && props.onOpen();
    return () => {
      document.body.style.overflow = 'auto';
      props.onClose && props.onClose();
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, show && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__background",
    style: backgroundZIndex
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: modalStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal ".concat((_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : ""),
    ref: nodeRef
  }, /*#__PURE__*/_react.default.createElement(_Flex.default, {
    column: true,
    gap: 1.5,
    width: "100%"
  }, props.showCloseButton && /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => setShow(false),
    style: {
      alignSelf: "flex-end"
    }
  }, /*#__PURE__*/_react.default.createElement(_vsc.VscClose, {
    className: "icon modal__X"
  })), props.children)))));
};

Modal.propTypes = {
  /** Defines if the modal appears */
  open: _propTypes.PropTypes.bool.isRequired,

  /** The modal contents */
  children: _propTypes.PropTypes.node.isRequired,

  /** The modal width */
  width: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),

  /** The modal height */
  height: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),

  /** If the modal close button appears */
  showCloseButton: _propTypes.PropTypes.bool,

  /** Callback function when the modal opens */
  onOpen: _propTypes.PropTypes.func,

  /** Callback function when the modal closes */
  onClose: _propTypes.PropTypes.func
};
Modal.defaultProps = {
  zIndex: 4,
  backgroundZIndex: 3,
  width: "40rem",
  showCloseButton: true
};
var _default = Modal;
exports.default = _default;