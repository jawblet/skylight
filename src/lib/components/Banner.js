import React from 'react';

const Banner = (props) => {
    return (
        <div className={`banner banner--${props.type}`}>
           <h5>{props.text}</h5>
        </div>
    );
}
 
export default Banner;