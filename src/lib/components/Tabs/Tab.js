import React from 'react';
import "./Tabs.css";
import "../_global.css";
import { PropTypes } from 'prop-types';

const Tab = (props) => {
    return (<div className={`tab padS pointer ${props.active ? 'tab--active' : ''} 
                            ${props.className && props.className}`}
            onClick={props.handleClick}
            data-id={props.id}>
        {props.children}
    </div>);
}

Tab.propTypes = {
    /** Id */
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]),
    /** Active state */
    active: PropTypes.bool,
    /** Handle click */
    handleClick: PropTypes.func,
    /** Component children */
    children: PropTypes.node.isRequired,
    /** Custom className */
    className: PropTypes.string,
    /** Custom styles */
    style: PropTypes.object,
}
 
export default Tab;