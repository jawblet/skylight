import React from 'react';
import Menu from '../Menu';  
import AccordionPanel from './AccordionPanel';
import MenuItem from '../MenuItem';
import { PropTypes } from 'prop-types';

// Ugh I think this whole thing need to be refactored or smth 
const AccordionMenu = ({ panels }) => {

    AccordionMenu.propTypes = {
        panels: PropTypes.shape({
            label: PropTypes.string.isRequired,
            items: PropTypes.array.isRequired,
            checked: PropTypes.bool
        })
    }

    AccordionMenu.defaultProps = {
        panels: { 
            checked: true
        }
    }

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
