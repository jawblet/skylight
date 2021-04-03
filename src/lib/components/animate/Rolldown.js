import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group'; 

const Rolldown = (props) => {
    const nodeRef = useRef(null);
    return (
        <CSSTransition in={props.in} 
                timeout={350} 
                nodeRef={nodeRef} 
                classNames="grow" 
                unmountOnExit
                node={nodeRef}
                style={{position:'relative'}}
                > 
                <div ref={nodeRef}>
                    {props.children}
                </div>
                
        </CSSTransition>

    );
}
 
export default Rolldown;

//