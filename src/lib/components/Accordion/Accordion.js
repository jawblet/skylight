import React from 'react';
import './Accordion.css';
import '../_global.css';

const Accordion = (props) => {
    return (
        <div className="accordion" style={{width:props.width}}>
           {props.children}
        </div>
    ); 
}
 
export default Accordion;