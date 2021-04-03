import React, { forwardRef } from 'react';

const Drawer = forwardRef((props, ref) => {
    const { shadow } = props;

    return(
            <menu className={`dropdown ${shadow ? 'dropdown--shadow' : ''}`}
                    style={props.style}
                        ref={ref}> 
                {props.children}
            </menu>       
    );
});
 
export default Drawer;