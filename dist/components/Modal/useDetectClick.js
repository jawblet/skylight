"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDetect;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function useDetect(onClose) {
  const nodeRef = (0, _react.useRef)(null);
  const [show, setShow] = (0, _react.useState)(false);

  const handleClickOutside = event => {
    //if modal is open and click is outside modal, close it 
    if (nodeRef.current && !nodeRef.current.contains(event.target)) {
      !!onClose && onClose();
      return setShow(false);
    }
  };

  (0, _react.useEffect)(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return {
    nodeRef,
    show,
    setShow
  };
}