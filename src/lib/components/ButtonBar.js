import React from 'react';

const ButtonBar = (props) => {

    return (
        <div className={`buttonbar ${props.column ? 'buttonbar--column' : 'buttonbar--row'}`}
            style={props.style}>
                {props.children}
        </div>
    );
}
 
export default ButtonBar;