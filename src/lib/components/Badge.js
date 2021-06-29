import React, { forwardRef } from 'react'; 
import PropTypes from 'prop-types';

const Badge = forwardRef((props, ref) => {

    Badge.propTypes = {
        /** Custom classname */ 
        className: PropTypes.string,
         /** Function to call onClick*/
        handleClick: PropTypes.func,
        /** Number to display in badge */
        value: PropTypes.number
    }

    return (
        <div className={`badge ${!props.value ? 'badge--none' :''} 
                ${props.className}`}
            onClick={props.handleClick} 
            ref={ref}>
                <h4 className="heavy badge__number"> 
                    {props.value || 0}
                </h4>            
        </div>
    )
})

export default Badge;
