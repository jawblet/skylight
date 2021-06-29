"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _AccordionPanel = _interopRequireDefault(require("./AccordionPanel"));

var _MenuItem = _interopRequireDefault(require("../MenuItem"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Ugh I think this whole thing need to be refactored or smth 
const AccordionMenu = (_ref) => {
  let {
    panels
  } = _ref;
  AccordionMenu.propTypes = {
    panels: _propTypes.PropTypes.shape({
      label: _propTypes.PropTypes.string.isRequired,
      items: _propTypes.PropTypes.array.isRequired,
      checked: _propTypes.PropTypes.bool
    })
  };
  AccordionMenu.defaultProps = {
    panels: {
      checked: true
    }
  };
  return /*#__PURE__*/_react.default.createElement(_Menu.default, {
    items: panels.length
  }, panels.map((panel, i) => {
    return /*#__PURE__*/_react.default.createElement(_AccordionPanel.default, {
      key: i,
      panel: panel
    }, panel.items.map((item, i) => {
      return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        item: item,
        nav: panel.nav,
        key: i
      }, /*#__PURE__*/_react.default.createElement("h4", null, item.label || item));
    }));
  }));
};

var _default = AccordionMenu;
exports.default = _default;