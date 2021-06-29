"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useToggle;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function useToggle(init) {
  const [show, setShow] = (0, _react.useState)(init || false);

  const handleClick = () => {
    setShow(!show);
  };

  return {
    show,
    setShow,
    handleClick
  };
}