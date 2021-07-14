import React from 'react';
import "./ButtonBar.css";
import "../_global.css";
import { PropTypes } from 'prop-types';


const ButtonBar = (props) => {
    return (<div className={`buttonbar buttonbar--${props.direction}
        ${props.divide ? `buttonbar--divide` : ''}`}>
        {props.children}
    </div>);
}

ButtonBar.propTypes = {
    /** Direction of button bar */ 
    direction: PropTypes.oneOf(["row", "column"]),
    /** Divide the buttons */ 
    divide: PropTypes.bool,
    /** Children */ 
    children: PropTypes.node.isRequired,
}

ButtonBar.defaultProps = {
    direction: "row"
}

export default ButtonBar;