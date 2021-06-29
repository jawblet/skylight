import React from 'react';
import './Accordion.css';
import '../_global.css';

const AccordionDropdown = (props) => { 
    return (
    <div className="accordion__list" style={props.style}>
            {props.children}
    </div>
    );
}
 
export default AccordionDropdown;