import React from 'react';
import './Button.css';
import '../_global.css';

const IconButton = (props) => {
    // this is Hot Mess 
    
    return (
        <button type="button" 
                className={`btn icon ${props.inline ? 'btn--inline' : ''}
                                ${props.active ? 'btn--active' : ''}
                                ${props.warning ? 'btn--warning' : ''}
                                ${props.className}`} 
                onClick={props.handleClick} 
                onMouseEnter={props.handleMouseEnter}
                onMouseLeave={props.handleMouseLeave}
                data-id={props.dataId} 
                style={props.style}
                >
            {props.icon} 
            {props.children}
        </button>
    )
}
 
export default IconButton;