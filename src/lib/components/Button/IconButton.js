import React from 'react';
import './Button.css';
import '../_global.css';
import PropTypes from 'prop-types';

const IconButton = (props) => {
    // this is Hot Mess 
    
    return (
        <button type={props.type}
                className={`iconbutton ${props.kind}
                                ${props.className}`} 
                onClick={props.handleClick} 
                onMouseEnter={props.handleMouseEnter}
                onMouseLeave={props.handleMouseLeave}
                data-id={props.id} 
                style={props.style}
                >
            <span className="icon">
                {props.icon} 
                {props.children}
            </span>
        </button>
    )
}

IconButton.propTypes = {
    /** Button style */
    kind: PropTypes.oneOf(["fill", "empty", "active", "warning"]),
    /** Function of button */
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    /** Function to call onClick*/
    handleClick: PropTypes.func,
    /** Function to call oneMouseEnter*/
    handleMouseEnter: PropTypes.func,
    /** Function to call oneMouseLeave*/
    handleMouseLeave: PropTypes.func,
    /** Disabled state */
    disabled: PropTypes.bool,
    /** Data id */ 
    id: PropTypes.node,
    /** Custom classname */ 
    className: PropTypes.string,
    /** Custom styles */ 
    style: PropTypes.object,
}

IconButton.defaultProps = {
    kind: "empty",
    disabled: false,
    type: "button"
}

 
export default IconButton;