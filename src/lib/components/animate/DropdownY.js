import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './DropdownY.css'; 

const DropdownY = (props) => {
    const nodeRef = useRef(null);
    return ( 
        <CSSTransition in={props.in} 
                timeout={350} 
                nodeRef={nodeRef} 
                classNames="dropdownY" 
                unmountOnExit
                node={nodeRef}
                > 
                <div ref={nodeRef}>
                    {props.children}
                </div>
                
        </CSSTransition>

    );
}
 
export default DropdownY;

