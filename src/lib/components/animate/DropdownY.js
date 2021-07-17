import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './DropdownY.css'; 
import { PropTypes } from 'prop-types';

const DropdownY = (props) => {
    return ( 
        <CSSTransition in={props.in} 
                timeout={350} 
                classNames="dropdownY" 
                unmountOnExit
                > 
                {props.children}                
        </CSSTransition>
    );
};

DropdownY.propTypes = {
    /** When the transition comes in */
    in: PropTypes.bool.isRequired,
    /** Component children */
    children: PropTypes.node.isRequired
}
 
export default DropdownY;

