import React, { useRef, useEffect } from 'react';
import Flex from '../layout/Flex';
import autosize from 'autosize';

const Textarea = (props) => {
    const descriptionRef = useRef(null);

    useEffect(() => {
        if(props.autosize === false) {
            return null;
        }
        return autosize(descriptionRef.current);
    }, []);

    return ( 
    <Flex column>
        {props.label && 
            <h6 style={{marginLeft:'0.5rem'}}>
                {props.label}
            </h6>}
        <textarea type="text" 
            ref={descriptionRef} 
            className="input"
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            disabled={props.disabled}
            onClick={props.handleClickIn}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
            onKeyDown={props.handleKeyDown} 
            rows={props.rows}
            style={props.style}/> 
        </Flex>
    );
}
 
export default Textarea;