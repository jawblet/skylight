import { useState } from 'react';

export default function useToggleOneOfMany(init) {
    const [array, setArray] = useState(init);

    const revertAll = () => {
        const arr = new Array(array.length).fill(false); 
        setArray(arr); 
    }

    const handleToggle = (i) => {
        const arr = new Array(array.length).fill(false); 
        arr[i] = !arr[i];
        setArray(arr); 
    }; 

    return {
        handleToggle,
        revertAll,
        array
    }
}