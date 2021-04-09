import React from 'react'; 

const Tooltip = (props) => {
    const { text, 
            direction, 
            show } = props; 
            
    return (
       <>
          {show && 
          <div className={`tltp tltp--${direction || 'top'}`}
                style={props.style}>
                <h4 className="tltp__text">{text}</h4>
            </div>}
        </>
   
    );
}
 
export default Tooltip;

//tooltip + tag are the same?
