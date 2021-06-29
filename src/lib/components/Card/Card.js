import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import '../_global.css';

const Card = (props) => {

     Card.propTypes = {
        /** Custom classname */ 
        className: PropTypes.string,
        /** Custom styles */ 
        style: PropTypes.object,
        /** Component's children */
        children: PropTypes.node
    } 

    return (<div className={`card ${props.className}`} style={props.style}>
        {props.children} 
    </div>  );
}
 
export default Card;