"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useToggleMany;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function useToggleMany(init) {
  const [array, setArray] = (0, _react.useState)(init);

  const handleToggle = i => {
    const arr = [...array];
    arr[i] = !arr[i];
    setArray(arr);
  };

  return {
    handleToggle,
    array
  };
}