import React from 'react'; 
import Drawer from '../Drawer'; 
import MenuItem from './MenuItem';
import useDetectClickOut from '../_hooks/useDetectClickOut';
import useSelectOne from '../_hooks/useSelectOne';
import DropdownY from '../animate/DropdownY';

const SelectMenu = ( { allItems, initValue} ) => {
    const { show, setShow, nodeRef, triggerRef } = useDetectClickOut(false);
    const { selectItem, handleSelect, items } = useSelectOne(initValue, allItems);   
   
    const handleClick = (e) => {
            setShow(false); 
            handleSelect(e); 
    };

    console.log(items);
    return(
        <div style={{position:'relative'}}>
        <div className="selectItem" ref={triggerRef}> 
               <h4>{selectItem}</h4> 
                <h4> 
                    + 
                </h4>
        </div> 
        <DropdownY in={show}>
           <Drawer ref={nodeRef}>
                {items && items.map((item, i) => {
                    return (<MenuItem key={i} item={item} handleClick={handleClick} dropdown>
                            <h4>{item}</h4>
                       </MenuItem>)
                })}
            </Drawer> 
        </DropdownY>
        </div>
    )
};

export default SelectMenu;