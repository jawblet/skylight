import React, { forwardRef } from 'react'; 
import { PropTypes } from 'prop-types';
import "./Badge.css";

const Badge = forwardRef((props, ref) => {
    return (
        <div className={`badge ${!props.value ? 'badge--none' :''} 
                ${props.className}`}
            onClick={props.handleClick} 
            ref={ref}>
                <h4 className="heavy badge__number"> 
                    {props.value}
                </h4>            
        </div>
    )
});

Badge.propTypes = {
    /** Custom classname */ 
    className: PropTypes.string,
     /** Function to call onClick*/
    handleClick: PropTypes.func,
    /** Number to display in badge */
    value: PropTypes.number
}

Badge.defaultProps = {
    value: 0
}

export default Badge;
