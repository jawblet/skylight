import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import '../_global.css';
 
const Button = (props) => { 
    return (
        <button  type={props.type} 
                className={`btn ${props.kind} 
                    ${props.CTA ? `CTA CTA--${props.kind}` : ''}
                    ${props.className}`}
                data-id={props.id} 
                name={props.name}  
                value={props.value} 
                disabled={props.disabled}
                onClick={props.handleClick}
                style={props.style}>
                {props.label}
        </button>
    );
}

Button.propTypes = {
    /** Button label */ 
    label: PropTypes.string.isRequired,
    /** Kind of button style */
    kind: PropTypes.oneOf(['highlight', 'lowlight', 'bright', 'neutral', 'empty', 'warning']),
    /** Function of button */
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    /** CTA (Call To Action) buttons that prompt big actions have a rounder style */
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
    style: PropTypes.object
}

Button.defaultProps = {
    kind: "inline",
    CTA: false,
    disabled: false,
    type: "button"
}

 
export default Button;