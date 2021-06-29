import { useState, useEffect } from 'react';
 
export default function useSelectOne(initState, listItems) {
      const [selectItem, setSelectItem] = useState(initState);
      const [items, setList] = useState(null);

      useEffect(() => {
        //remove selected item from list
        const newItems = listItems.filter(item => item !== selectItem); 
        setList(newItems);
      }, [selectItem, listItems]);
 
      const handleSelect = (e) => {
          setSelectItem(e.currentTarget.dataset.id);
      } 

    return {
        selectItem,
        handleSelect,
        items
    }
}