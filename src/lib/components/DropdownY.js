import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group'; 

const DropdownY = (props) => {
    const nodeRef = useRef(null);
    return ( 
        <CSSTransition in={props.in} 
                timeout={150} 
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

