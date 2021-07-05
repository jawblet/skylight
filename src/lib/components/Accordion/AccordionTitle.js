import React from 'react';
import { PropTypes } from 'prop-types';
import './Accordion.css';
import '../_global.css';

const AccordionTitle = (props) => {
    return (
        <>
            <input type="checkbox" className="accordion__input" 
                id={props.id} defaultChecked={props.checked}/>
            <label className="accordion__label" htmlFor={props.id}>
                {props.children}
            </label>
        </>
    );
}

AccordionTitle.propTypes = { 
    /** Id to collapse/expand the correct panel */
    id: PropTypes.string.isRequired,
    /** If the panel is open or closed by default */
    defaultChecked: PropTypes.bool,
    /** Children */
    children: PropTypes.node.isRequired,
}

AccordionTitle.defaultProps = {
    defaultChecked: false
}
 
export default AccordionTitle;