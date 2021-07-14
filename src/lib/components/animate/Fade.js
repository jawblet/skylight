import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Fade.css';

const Fade = (props) => {
    const nodeRef = useRef(null);

    return (
        <CSSTransition in={props.in} 
                        timeout={props.short ? 150 : 350} 
                        nodeRef={nodeRef} 
                        classNames="fade"
                        exit={props.exit} 
                        enter={props.enter} 
                        unmountOnExit>
                <div ref={nodeRef}> 
                    {props.children}
                </div>
        </CSSTransition>
    );
}
 
export default Fade;