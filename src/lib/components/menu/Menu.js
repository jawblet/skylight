import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import '../_global.css';

const Menu = ({ items, ...props }) => { 

    Menu.propTypes = {
        /** Custom classname */ 
        className: PropTypes.string,
        /** Custom styles */ 
        style: PropTypes.object,
        /** Component's children */
        children: PropTypes.node
    }

    return ( 
        <menu className={`menu ${props.className}`} style={props.style}>
            {props.children}
        </menu> 
     );
}
 
export default Menu;



