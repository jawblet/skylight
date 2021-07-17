import React from 'react';
import { CSSTransition } from 'react-transition-group'; 
import './SlideX.css';
import { PropTypes } from 'prop-types';

const SlideX = (props) => {

    return (  
        <CSSTransition in={props.in} 
            timeout={350} 
            classNames="rollOutX" 
            unmountOnExit
            > 
            {props.children}
        </CSSTransition>
    );
}

SlideX.propTypes = {
    /** When the transition comes in */
    in: PropTypes.bool.isRequired,
    /** Component children */
    children: PropTypes.node.isRequired
}
 
export default SlideX;