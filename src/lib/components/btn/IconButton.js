import React from 'react';

const IconButton = (props) => {
    return (
        <button type="button" 
                className={`btn icon ${props.inline ? 'btn--inline' : ''}
                                ${props.active ? 'btn--active' : ''}
                                ${props.warning ? 'btn--warning' : ''}
                                ${props.className}`} 
                onClick={props.handleClick}
                data-id={props.dataId} 
                style={props.style}
                >
            {props.icon} 
        </button>
    )
}
 
export default IconButton;