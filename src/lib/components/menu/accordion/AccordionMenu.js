import React from 'react';
import Menu from '../Menu';  
import AccordionPanel from './AccordionPanel';
import MenuItem from '../MenuItem'; 

const AccordionMenu = ({ panels }) => {

    return (
    <Menu items={panels.length}>
        {panels.map((panel, i) => {
         return ( 
            <AccordionPanel key={i}
                    panel={panel}>
            
                {panel.items.map((item, i) => {
                    return (
                        <MenuItem item={item} nav={panel.nav} key={i}>
                                <h4>{item.label || item}</h4>
                        </MenuItem>
                  ) 
                    })}
            </AccordionPanel>
         )})
         }
    </Menu>
    );
}

 
export default AccordionMenu;
