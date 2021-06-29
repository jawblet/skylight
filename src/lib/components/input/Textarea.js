import React, { useRef, useEffect } from 'react';
import Flex from '../layout/Flex';
import autosize from 'autosize';
import PropTypes from 'prop-types';
import './Input.css';
import '../_global.css';

const Textarea = (props) => {
    const descriptionRef = useRef(null);

    useEffect(() => {
        if(props.autosize === false) {
            return null;
        }
        return autosize(descriptionRef.current);
    }, [props.autosize]);

    return ( 
    <Flex column width={props.width}>
        {props.label && 
            <h6 style={{marginLeft:'0.5rem'}}>
                {props.label}
            </h6>}
        <textarea type="text" 
            ref={descriptionRef} 
                className={`input ${props.inline ? 'input--inline' : ''}
                ${props.fail ? "input--fail" : ''}
                ${props.className}`}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            disabled={props.disabled}
            readOnly={props.readOnly}
            onClick={props.handleClickIn} 
            onBlur={props.handleBlur}
            onChange={props.handleChange}
            onKeyDown={props.handleKeyDown} 
            rows={props.rows}
            style={props.style}
            /> 
        </Flex>
    );
}

Textarea.propTypes = {
    /** Textarea label */ 
    label: PropTypes.string.isRequired,
    /** If the textarea is inline */ 
    inline: PropTypes.bool,
    /** Failed state */ 
    fail: PropTypes.bool,
    /** Number of initial rows */
    rows: PropTypes.number,
    /** Name */
    name: PropTypes.string,
    /** Value */
    name: PropTypes.string,
    /** Placeholder */
    placeholder: PropTypes.string,
    /** Disabled state */ 
    disabled: PropTypes.bool,
    /** Read-only state */ 
    fail: PropTypes.bool,
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
    /** Custom styles */ 
    style: PropTypes.object,
}

Textarea.defaultProps = {
    rows: 1
}

export default Textarea;