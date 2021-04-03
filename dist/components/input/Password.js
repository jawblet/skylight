"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _Input = _interopRequireDefault(require("./Input"));

var _Flex = _interopRequireDefault(require("../layout/Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Password = (_ref) => {
  let {
    confirm
  } = _ref;
  const [show, setShow] = (0, _react.useState)(false);

  const handleShowPass = () => {
    setShow(!show);
  };

  return /*#__PURE__*/_react.default.createElement(_Flex.default, {
    column: true,
    gap: 1
  }, /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: show ? 'text' : 'password',
    placeholder: "Password",
    showPass: true,
    show: show,
    handleShowPass: handleShowPass
  }), confirm && /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: show ? 'text' : 'password',
    placeholder: "Confirm password"
  }));
};

var _default = Password;
exports.default = _default;