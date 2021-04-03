import React from 'react';
import IconButton from './btn/IconButton';
import Tooltip from './Tooltip';
 

const TooltipButton = ({ getTooltip, 
                        hideTooltip, 
                        tooltips,
                        text,
                        id,
                        ...props }) => {

    return (
        <div className="tooltipBtn"
            data-id={id}
            onMouseEnter={getTooltip}
            onMouseLeave={hideTooltip}
            onClick={props.handleClick}
            >
            <IconButton />
            <Tooltip text={text}
                    direction={props.direction}
                    show={tooltips[id]}
                    />
        </div>
    );
}
 
export default TooltipButton;