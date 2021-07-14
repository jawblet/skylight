import React from 'react';
import Flex from '../layout/Flex';
import "./Tabs.css";
import "../_global.css";
import { PropTypes } from 'prop-types';

const Tabs = (props) => {
    return (
        <Flex>
           {props.children}
           <div className="tabs"></div>
        </Flex>
    );
}

Tabs.propTypes = {
    /** <Tab/> children */
    children: PropTypes.node.isRequired
}
 
export default Tabs;