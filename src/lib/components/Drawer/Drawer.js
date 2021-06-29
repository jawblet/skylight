import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './Drawer.css';
import '../_global.css';

const Drawer = forwardRef((props, ref) => {
    
    Drawer.propTypes = {
        /** Custom classname */ 
        className: PropTypes.string,
        /** Custom styles */ 
        style: PropTypes.object,
        /** Component's children */
        children: PropTypes.node
    }

    return(
            <menu className={`dropdown ${props.shadow ? 'dropdown--shadow' : ''}`}
                    style={props.style}
                        ref={ref}> 
                {props.children}
            </menu>       
    );
});
 
export default Drawer;