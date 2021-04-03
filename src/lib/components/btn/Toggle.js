import React from 'react';
import Flex from '../layout/Flex';
import Tree from '../atoms/Tree';


const Toggle = (props) => {
    return ( 
    <Tree label='Toggle'>
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
    </Tree>
     );
}
 
export default Toggle;