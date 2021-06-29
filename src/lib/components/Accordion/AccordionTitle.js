import React from 'react';
import './Accordion.css';
import '../_global.css';

const AccordionTitle = (props) => {
    return (
        <>
            <input type="checkbox" className="accordion__input" id={props.label}
                defaultChecked={props.checked || false}/>
            <label className="accordion__label" htmlFor={props.label}>
                {props.children}
            </label>
        </>
    );
}
 
export default AccordionTitle;