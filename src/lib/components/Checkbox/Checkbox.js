import React from 'react';
import Flex from '../layout/Flex';
import { PropTypes } from 'prop-types';
import './Checkbox.css';
import '../_global.css';

const Check = (props) => {
    return (
        <Flex middle className="checkbox">
            <input type="checkbox" 
                    id={props.id} 
                    value={props.value} 
                    className={`checkbox--${props.size} checkbox--hidden 
                                ${props.className ?? ''}`}
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

Checkbox.propTypes = {
    /** Box label */ 
    label: PropTypes.string,
    /** Box size */ 
    size: PropTypes.oneOf(["big", "small"]),
    /** Checkbox and label id */ 
    id: PropTypes.string,
    /** Value */ 
    value: PropTypes.string,
    /** If the default state is checked or not */ 
    checked: PropTypes.bool,
    /** Disabled state */ 
    disabled: PropTypes.bool,
    /** Custom classname */ 
    className: PropTypes.string,
    /** Custom styles */ 
    style: PropTypes.object
}

Checkbox.defaultProps = {
    checked: true,
    size: "small"
}
 
export default Checkbox;
