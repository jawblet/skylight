import React from 'react';
import { PropTypes } from 'prop-types';
import './Accordion.css';
import '../_global.css';

const AccordionDropdown = (props) => { 
    return (
    <div className={`accordion__list ${props.className}`} style={props.style}>
            {props.children}
    </div>
    );
}

AccordionDropdown.propTypes = { 
     /** Custom classname */ 
     className: PropTypes.string,
     /** Custom styles */ 
     style: PropTypes.object,
}
 
export default AccordionDropdown;