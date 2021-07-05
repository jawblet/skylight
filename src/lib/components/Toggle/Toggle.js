import React from 'react';
import Flex from '../layout/Flex';
import { PropTypes } from 'prop-types';
import './Toggle.css';
import '../_global.css';

const Toggle = (props) => {
    return ( 
        <Flex middle gap={1} className={props.className}>
            <div className={`toggle ${props.checked ? 'toggle--on' : ''}`} 
                onClick={props.handleClick} 
                disabled={props.disabled}>
            </div> 
            <h4>
                {props.label} 
            </h4>
        </Flex>
     );
}

Toggle.propTypes = {
    /** Toggle label */
    label: PropTypes.string,
    /** Initial checked state */
    checked: PropTypes.bool,
    /** Custom classname */ 
    className: PropTypes.string,
    /** Function to call onClick*/
    handleClick: PropTypes.func,
    /** Disabled state */
    disabled: PropTypes.bool
}

Toggle.defaultProps = {
    checked: true
}
 
export default Toggle;