import React from 'react'; 
import Fade from './animate/Fade';

const Tooltip = (props) => {
    const { text, 
            direction, 
            show } = props; 
            
    return (
        <Fade in={show}>
            <div className={`tltp tltp--${direction}`}
                style={props.style}>
                <h4 className="tltp__text">{text}</h4>
            </div>
        </Fade>
   
    );
}
 
export default Tooltip;


//tooltip + tag are the same 