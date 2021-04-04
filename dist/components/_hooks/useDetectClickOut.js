"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDetectClickOut;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function useDetectClickOut(initState) {
  const triggerRef = (0, _react.useRef)(null);
  const nodeRef = (0, _react.useRef)(null);
  const [show, setShow] = (0, _react.useState)(initState || false);

  const handleClickOutside = event => {
    //if click is on trigger element, toggle modal
    if (triggerRef.current && triggerRef.current.contains(event.target)) {
      return setShow(!show);
    } //if modal is open and click is outside modal, close it 


    if (nodeRef.current && !nodeRef.current.contains(event.target)) {
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
    triggerRef,
    nodeRef,
    show,
    setShow
  };
}