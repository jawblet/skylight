import React from 'react';
import Flex from './layout/Flex';

const Check = (props) => {
    return (
        <Flex middle className="checkbox">
            <input type="checkbox" 
                    id={props.id} 
                    value={props.value} 
                    className={`checkbox--${props.size} checkbox--hidden`}
                    defaultChecked={props.checked}
                    disabled={props.disabled}
                    style={props.style}
                    /> 
            <button className={`checkbox--${props.size} checkbox--visible`}/>
        </Flex>
    )
}

const Checkbox = (props) => {

    if(!props.label) {
        return <Check {...props}/>
    }

    return (
        <Flex middle>
            <Check {...props}/>
            <label htmlFor={props.id} className='checkbox__label'> {props.label}</label> 
        </Flex>
    );
}
 
export default Checkbox;
