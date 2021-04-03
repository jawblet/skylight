import React from 'react';
import Flex from '../layout/Flex';
import ShowPass from '../atoms/ShowPass';

const Input = (props) => {
    return (
            <Flex column>
                {props.label && 
                <h6 style={{marginLeft:'0.5rem'}}>
                    {props.label}
                </h6>}
                <Flex>
                    <input type={props.type}
                    className={`input ${props.inline ? 'input--inline' : ''}
                            ${props.fail ? "input--fail" : ''} `}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    name={props.name}
                    value={props.value}
                    onChange={props.handleChange}
                    onKeyDown={props.handleKeyDown} 
                    onClick={props.handleClickIn}
                    onBlur={props.handleBlur}
                    style={props.style}
                    />  
                {props.showPass && 
                    <ShowPass {...props}/>} 
                </Flex>
            </Flex>       
    )
}
 
export default Input;