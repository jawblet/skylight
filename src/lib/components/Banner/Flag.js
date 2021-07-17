import React from 'react';
import './Banner.css';
import { PropTypes } from 'prop-types';

const Flag = (props) => {
    return (
        <div className={`banner banner--${props.type}`} style={props.style}>
                <h5>{props.text}</h5>
        </div>
    );
}

Flag.propTypes = {
    /** Banner type */
    type: PropTypes.oneOf(['info', 'error', 'success']),
    /** Banner text */
    text: PropTypes.string.isRequired,
    /** Styles */
    style: PropTypes.object
}
 
export default Flag;