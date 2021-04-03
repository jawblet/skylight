import React from 'react';

const Blur = ({bg, ...props}) => {
    return (
        <span className="blur" style={{background:bg}}></span>
    );
}
 
export default Blur;