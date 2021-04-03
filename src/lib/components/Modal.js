import React, { forwardRef, useEffect } from 'react';
import CloseButton from './atoms/CloseButton';
import Flex from './layout/Flex';

export const ModalComponent = forwardRef((props, ref) => {
    return (
    <div className="modal" ref={ref}> 
        <Flex column gap={1.5} width="100%"> 
            <CloseButton handleClose={props.handleClose} className="modal__X"/>
            <h3>{props.title}</h3>
            <p>{props.text}</p> 
            {props.children || <div style={{paddingBottom:'1.5rem'}}></div>}
        </Flex>
    </div>
    ) 
});

export const Modal = (props) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    return (  
    <div className="modal__background">
        <div style={{position:'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>
            <ModalComponent ref={props.nodeRef} {...props}/>
        </div>
    </div>
  )
}
 
