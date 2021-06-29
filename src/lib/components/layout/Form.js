import React from 'react';
import Flex from './Flex';

const Form = (props) => {
    return (
        <Flex column gap={1} width={props.width}>
            <h3 className="center">{props.title}</h3>
            <form className="form">
                {props.children}
            </form>
        </Flex> 
    );
}
 
export default Form;