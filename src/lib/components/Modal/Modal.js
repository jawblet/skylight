import React, { useEffect, forwardRef } from 'react';
import { VscClose } from 'react-icons/vsc'; 
import Flex from '../layout/Flex';
import './Modal.css';
import '../_global.css';
import { PropTypes } from 'prop-types'; 
import useDetectClick from './useDetectClick';

//callback on close 
const Modal = (props) => {

    const backgroundZIndex = {
        zIndex: props.backgroundZIndex
    }

    const modalStyle = {
        zIndex: props.zIndex,
        position:'fixed',
        top:'50%', 
        left:'50%', 
        transform:'translate(-50%, -50%)',
        height: props.height,
        width: props.width
    }

    const { 
        nodeRef, 
        show, 
        setShow } = useDetectClick();
    
    useEffect(() => {
        if(props.open) {
           return setShow(true);
        } 
        setShow(false);
    }, [props.open]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        props.onOpen && props.onOpen();
        return () => {
            document.body.style.overflow = 'auto';
            props.onClose && props.onClose();
        }
    }, []);

    return (  <>
   {show && <div className="modal__background" style={backgroundZIndex}>
        <div style={modalStyle}>
        <div className={`modal ${props.className ?? ""}`} ref={nodeRef}> 
        <Flex column gap={1.5} width="100%"> 
            {props.showCloseButton && 
            <div onClick={() => setShow(false)} style={{alignSelf:"flex-end"}}>
                <VscClose className="icon modal__X"/>
            </div>}
            {props.children}
        </Flex>
    </div>
        </div>
    </div>}
    </>
  )
}

Modal.propTypes = {
    /** Defines if the modal appears */
    open: PropTypes.bool.isRequired,
    /** The modal contents */
    children: PropTypes.node.isRequired,
    /** The modal width */
    width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number]),
    /** The modal height */
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]),
    /** If the modal close button appears */
    showCloseButton: PropTypes.bool,
    /** Callback function when the modal opens */
    onOpen: PropTypes.func,
    /** Callback function when the modal closes */
    onClose: PropTypes.func,
}

Modal.defaultProps = {
    zIndex: 4,
    backgroundZIndex: 3,
    width: "40rem",
    showCloseButton: true
}

export default Modal;