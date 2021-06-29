import { useState } from 'react'; 

export default function useToggle(init) {

    const [show, setShow] = useState(init || false);

    const handleClick = () => {
        setShow(!show)
    }

    return {
        show,
        setShow,
        handleClick
    }
}

