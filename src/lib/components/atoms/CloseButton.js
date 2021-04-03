import React from 'react';
import { VscClose } from 'react-icons/vsc';

const CloseButton = (props) => {
    return (
        <VscClose className={`icon ${props.className}`} 
            onClick={props.handleClose}
            style={props.style}/> 
    );
}
 
export default CloseButton;