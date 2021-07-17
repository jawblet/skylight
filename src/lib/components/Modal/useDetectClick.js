import { useEffect, useRef, useState } from 'react';
 
export default function useDetect(onClose) {
    const nodeRef = useRef(null);
    
    const [show, setShow] = useState(false); 
   
    const handleClickOutside = event => {
      //if modal is open and click is outside modal, close it 
        if(nodeRef.current && !nodeRef.current.contains(event.target)) {
          !!onClose && onClose();
          return setShow(false);
        }
      };
    
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
          document.removeEventListener("click", handleClickOutside, true);
        };
      });
      
    
    return {
        nodeRef,
        show,
        setShow
    }
}