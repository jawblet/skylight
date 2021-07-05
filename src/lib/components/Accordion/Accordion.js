import React from 'react';
import { PropTypes } from 'prop-types';
import './Accordion.css';
import '../_global.css';

const Accordion = (props) => {
    return (
        <div className="accordion" style={{width:props.width}}>
           {props.children}
        </div>
    ); 
}

Accordion.propTypes = { 
    width: PropTypes.string,
    children: PropTypes.node.isRequired    
}
 
export default Accordion;