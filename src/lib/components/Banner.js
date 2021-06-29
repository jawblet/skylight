import React, { useEffect, useState } from 'react';
import Fade from './animate/Fade';

const Banner = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if(props.in) {
            setShow(true);
            setTimeout(() => setShow(false), 5000);
        }
    }, [props.in]);

    return (
        <Fade in={show}>
            <div className={`banner banner--${props.type}`}>
            <h5>{props.text}</h5>
            </div>
        </Fade> 
    );
}
 
export default Banner;