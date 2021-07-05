import React, { useRef, useEffect } from 'react';
import Flex from '../layout/Flex';
import PropTypes from 'prop-types';
import './Input.css';
import '../_global.css';

const Input = (props) => {

    const inputRef = useRef(null);
    
    useEffect(() => {
        if(props.autofocus) { 
            inputRef.current.focus();
        }
    }, [props.autofocus]);

    const style = {...props.style, width:props.width};

    return (
            <Flex column>
                {props.label && 
                <h6 style={{marginLeft:'0.5rem'}}>
                    {props.label}
                </h6>}
                <Flex>
                    <input ref={inputRef}
                        type={props.type}
                        className={`input ${props.inline ? 'input--inline' : ''}
                            ${props.fail ? "input--fail" : ''}
                            ${props.className}`}
                        placeholder={props.placeholder}
                        disabled={props.disabled}
                        name={props.name}
                        value={props.value}
                        onChange={props.handleChange}
                        onKeyDown={props.handleKeyDown} 
                        onClick={props.handleClickIn}
                        onBlur={props.handleBlur}
                        size={props.size}
                        readOnly={props.readOnly}
                        style={style}
                    />  
                </Flex>
            </Flex>       
    )
}

Input.propTypes = {
    /** Textarea label */ 
    label: PropTypes.string,
    /** If the textarea is inline */ 
    inline: PropTypes.bool,
    /** Failed state */ 
    fail: PropTypes.bool,
    /** Size */
    size: PropTypes.number,
    /** Name */
    name: PropTypes.string,
    /** Value */
    value: PropTypes.string,
    /** Placeholder */
    placeholder: PropTypes.string,
    /** Disabled state */ 
    disabled: PropTypes.bool,
    /** Read-only state */ 
    readOnly: PropTypes.bool,
    /** If input autofocuses */ 
    autofocus: PropTypes.bool,
    /** Function to call onClick*/
    handleClick: PropTypes.func,
    /** Function to call onBlur*/
    handleBlur: PropTypes.func,
    /** Function to call onKeydown*/
    handleKeyDown: PropTypes.func,
    /** Function to call onChange*/
    handleChange: PropTypes.func,
    /** Custom classname */ 
    className: PropTypes.string,
    /** Width */
    width: PropTypes.string,
    /** Custom styles */ 
    style: PropTypes.object,
}

Input.defaultProps = {
    width: "100%"
}
 
export default Input;
