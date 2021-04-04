import React from 'react';

const Menu = ({ items, ...props }) => { 

    return ( 
        <menu className='menu'>
                {items ? 
                props.children
                : <h4> {props.empty || `Empty menu`} 
                </h4>
                }
        </menu> 
     );
}
 
export default Menu;



