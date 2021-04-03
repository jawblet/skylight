import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
 
const SwitchSlide = (props) => { 
    const nodeRef = useRef(null);

    return (
            <CSSTransition in={props.in}
                    timeout={350} 
                    classNames="rollOutX" 
                    //nodeRef={nodeRef}
                    unmountOnExit
                     > 
                        <span ref={nodeRef}>
                            {props.children}
                        </span>
            </CSSTransition>
     
    );
}
 
export default SwitchSlide;



/*
import { SwitchTransition, CSSTransition } from 'react-transition-group';

<SwitchTransition mode="out-in">
            <CSSTransition key={props.in}
                        timeout={350} 
                        classNames="rollOutX" 
                        addEndListener={(node, done) => {
                            node.addEventListener("transitionend", 
                                    done, false);
                            }}> 
                    {props.children}
            </CSSTransition>
    </SwitchTransition>

*/