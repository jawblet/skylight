"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSelectOne;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function useSelectOne(initState, listItems) {
  const [selectItem, setSelectItem] = (0, _react.useState)(initState);
  const [items, setList] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    //remove selected item from list
    const newItems = listItems.filter(item => item !== selectItem);
    setList(newItems);
  }, [selectItem]);

  const handleSelect = e => {
    setSelectItem(e.currentTarget.dataset.id);
  };

  return {
    selectItem,
    handleSelect,
    items
  };
}