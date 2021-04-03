import React, { useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';


const Blur = (props) => {
    const nodeRef = useRef(null);
    return (
            <CSSTransition in={props.in} 
                timeout={350} 
                classNames="zoom" 
                nodeRef={nodeRef}
                unmountOnExit> 
                    <span ref={nodeRef}>
                        {props.children}
                    </span>
            </CSSTransition>


    );
}
 
export default Blur;