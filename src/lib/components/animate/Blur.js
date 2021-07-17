import React from 'react'; 
import { CSSTransition } from 'react-transition-group';
import './Blur.css';
import { PropTypes } from 'prop-types';

const Blur = (props) => {
    return (
            <CSSTransition in={props.in} 
                timeout={150} 
                classNames="blur" 
                unmountOnExit> 
                    {props.children}
            </CSSTransition>
    );
}

Blur.propTypes = {
    /** When the transition comes in */
    in: PropTypes.bool.isRequired,
    /** Component children */
    children: PropTypes.node.isRequired
}
 
export default Blur;