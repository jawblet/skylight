import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import '../_global.css';
 
const Button = (props) => { 

    Button.propTypes = {
        /** Button label */ 
        label: PropTypes.string.isRequired,
        /** Button style */
        kind: PropTypes.oneOf(["fill", "empty", "active", "warning"]),
        /** Function of button */
        type: PropTypes.oneOf(["button", "submit", "reset"]),
        /** If the button is a Call To Action, it will be rounder */
        CTA: PropTypes.bool,
        /** Function to call onClick*/
        handleClick: PropTypes.func,
        /** Disabled state */
        disabled: PropTypes.bool,
        /** Data id */ 
        id: PropTypes.node,
        /** Custom classname */ 
        className: PropTypes.string,
        /** Custom styles */ 
        style: PropTypes.object,
    }

    Button.defaultProps = {
        kind: "empty",
        CTA: false,
        disabled: false,
        type: "button"
    }

    return (
        <button className={`btn btn--${props.kind} 
                    ${props.CTA ? `CTA CTA--${props.kind}` : ''}
                    ${props.className}`}
                data-id={props.id} 
                type={props.type} 
                name={props.name}
                value={props.value} 
                disabled={props.disabled}
                onClick={props.handleClick}
                style={props.style}>
                {props.label}
        </button>
    );
}
 
export default Button;