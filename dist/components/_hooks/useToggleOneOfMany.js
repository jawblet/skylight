"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useToggleOneOfMany;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function useToggleOneOfMany(init) {
  const [array, setArray] = (0, _react.useState)(init);

  const revertAll = () => {
    const arr = new Array(array.length).fill(false);
    setArray(arr);
  };

  const handleToggle = i => {
    const arr = new Array(array.length).fill(false);
    arr[i] = !arr[i];
    setArray(arr);
  };

  return {
    handleToggle,
    revertAll,
    array
  };
}