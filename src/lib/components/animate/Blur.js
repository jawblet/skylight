import React, { useRef } from 'react'; 
import { CSSTransition } from 'react-transition-group';


const Blur = (props) => {
    const nodeRef = useRef(null);
    return (
            <CSSTransition in={props.in} 
                timeout={150} 
                classNames="blur" 
                nodeRef={nodeRef}
                unmountOnExit> 
                <div ref={nodeRef}>
                    {props.children}
                </div>
            </CSSTransition>


    );
}
 
export default Blur;