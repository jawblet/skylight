import React from 'react';
import "./Tabs.css";
import "../_global.css";
import { PropTypes } from 'prop-types';

const Tab = (props) => {
    return (<div className={`tab padS pointer ${props.active ? 'tab--active' : ''}`}
            onClick={props.handleClick}>
        {props.children}
    </div>);
}

Tab.propTypes = {
    /** Id used to set the active tab */
    id: PropTypes.node,
    /** Active state */
     active: PropTypes.bool,
    /** Handle click */
    handleClick: PropTypes.func,
    /** Component children */
    children: PropTypes.node.isRequired
}
 
export default Tab;