import React from 'react';

const ButtonBar = (props) => {

    return (
        <div className={`buttonbar ${props.column ? 'buttonbar--column' : 'buttonbar--row'}
                                ${props.divide ? 'buttonbar--divide' : ''}
                                ${props.outline ? 'border-lightest' : ''}
                                `}
                style={props.style}>
                {props.children}
        </div>
    ); 
}
 
export default ButtonBar;

// finish adding divider 