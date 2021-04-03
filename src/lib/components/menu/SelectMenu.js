import React from 'react'; 
import Rolldown from '../animate/Rolldown';
import Drawer from '../Drawer';
import useDetectClickOut from '../../../hooks/useDetectClickOut';
import useSelectOne from '../../../hooks/useSelectOne';
import MenuItem from './MenuItem';

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
        <Rolldown in={show}>
           <Drawer ref={nodeRef}>
                {items && items.map((item, i) => {
                    return (<MenuItem key={i} item={item} handleClick={handleClick} dropdown>
                            <h4>{item}</h4>
                       </MenuItem>)
                })}
            </Drawer> 
        </Rolldown>
        </div>
    )
};

export default SelectMenu;