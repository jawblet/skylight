import { useState } from 'react'; 

export default function useToggle(init) {

    const [show, setShow] = useState(init || false);

    return {
        show,
        setShow
    }
}

