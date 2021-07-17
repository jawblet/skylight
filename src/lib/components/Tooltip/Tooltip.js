import React from 'react'; 
import "./Tooltip.css";
import { PropTypes } from 'prop-types';

const Tooltip = (props) => {
    return (
       <>
          {props.open && 
          <div className={`tltp tltp--${props.direction || 'top'}`}
                style={props.style}>
                <h4 className="tltp__text">{props.text}</h4>
            </div>}
        </>
    );
}
 
Tooltip.propTypes = {
    /** If tooltip appears */
    open: PropTypes.bool.isRequired,
    /** Tooltip orientation */
    direction: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    /** Tooltip text */
    text: PropTypes.string.isRequired,
    /** Custom style */
    style: PropTypes.object
}

Tooltip.defaultProps = {
    direction: "top"
}

export default Tooltip;
