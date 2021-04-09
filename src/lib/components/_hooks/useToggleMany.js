import { useState } from 'react';

export default function useToggleMany(init) {
    const [array, setArray] = useState(init);

    const handleToggle = (i) => {
        const arr = [...array];
        arr[i] = !arr[i];
        setArray(arr); 
    } 

    return {
        handleToggle,
        array 
    }
}