import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Fade.css';
import { PropTypes } from 'prop-types';

const Fade = (props) => {
    return (
        <CSSTransition in={props.in} 
                        timeout={props.short ? 150 : 350} 
                        classNames="fade"
                        exit={props.exit} 
                        enter={props.enter} 
                        unmountOnExit>
                    {props.children}
        </CSSTransition>
    );
}

Fade.propTypes = {
    /** When the transition comes in */
    in: PropTypes.bool.isRequired,
    /** Component children */
    children: PropTypes.node.isRequired
}
 
export default Fade;