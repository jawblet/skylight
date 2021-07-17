import React, { useEffect, useState } from 'react';
//import Fade from './animate/Fade';
import { PropTypes } from 'prop-types';
import './Banner.css';
import '../_global.css';

// position abs in a few places 

const Banner = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if(props.in) {
            setShow(true);
            setTimeout(() => setShow(false), props.timeout);
        }
    }, [props.in]);

    return (
        <>
       {show &&
            <div className={`banner banner--${props.type}`} style={props.style}>
                <h5>{props.text}</h5>
            </div>
        }
       </>
    );
}
 
Banner.propTypes = {
    /** Trigger banner entry */
    in: PropTypes.bool.isRequired,
    /** Timeout in milliseconds before Banner disappears */
    timeout: PropTypes.number,
    /** Banner type */
    type: PropTypes.oneOf(['info', 'error', 'success']),
    /** Banner text */
    text: PropTypes.string.isRequired,
    /** Styles */
    style: PropTypes.object
}

Banner.defaultProps = {
    timeout: 5000,
    type: "info"
}
 
export default Banner;