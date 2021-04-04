import React from 'react';
import Flex from '../layout/Flex';

const Toggle = (props) => {
    return ( 
        <Flex middle gap={1}>
            <div className={`toggle ${props.checked ? 'toggle--on' : ''}`} 
                onClick={props.handleToggle}
                disabled={props.disabled} 
                >
            </div> 
            <h4>
                {props.label} 
            </h4>
        </Flex>
     );
}
 
export default Toggle;