"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Rolldown = _interopRequireDefault(require("../animate/Rolldown"));

var _Drawer = _interopRequireDefault(require("../Drawer"));

var _useDetectClickOut = _interopRequireDefault(require("../../../hooks/useDetectClickOut"));

var _useSelectOne = _interopRequireDefault(require("../../../hooks/useSelectOne"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SelectMenu = (_ref) => {
  let {
    allItems,
    initValue
  } = _ref;
  const {
    show,
    setShow,
    nodeRef,
    triggerRef
  } = (0, _useDetectClickOut.default)(false);
  const {
    selectItem,
    handleSelect,
    items
  } = (0, _useSelectOne.default)(initValue, allItems);

  const handleClick = e => {
    setShow(false);
    handleSelect(e);
  };

  console.log(items);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "selectItem",
    ref: triggerRef
  }, /*#__PURE__*/_react.default.createElement("h4", null, selectItem), /*#__PURE__*/_react.default.createElement("h4", null, "+")), /*#__PURE__*/_react.default.createElement(_Rolldown.default, {
    in: show
  }, /*#__PURE__*/_react.default.createElement(_Drawer.default, {
    ref: nodeRef
  }, items && items.map((item, i) => {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      key: i,
      item: item,
      handleClick: handleClick,
      dropdown: true
    }, /*#__PURE__*/_react.default.createElement("h4", null, item));
  }))));
};

var _default = SelectMenu;
exports.default = _default;