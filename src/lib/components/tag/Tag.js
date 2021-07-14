import React from 'react'; 
import { VscClose } from 'react-icons/vsc';
import { PropTypes } from 'prop-types';
import "./Tag.css";
import "../_global.css";

const Tag = (props) => { 
    return (
        <div className={`tag ${props.kind ?? ""} ${props.className ?? ""}`} 
            style={{backgroundColor:props.bg, color: props.color }}> 
            {props.children}
            {props.chip &&  
                <VscClose className="tag__X" onClick={props.handleClick}
                        style={{color: props.color}}
                    />}
        </div> 
    );
}

Tag.propTypes = {
    /** Background color */ 
    bg: PropTypes.string,
    /** Color */
    color: PropTypes.string,
    /** Children */
    children: PropTypes.node,
    /** Kind of tag style */
    kind: PropTypes.oneOf(['highlight', 'lowlight', 'neutral', 'dark']),
    /** If the tag is a chip */ 
    chip: PropTypes.bool,
    /** Function to call onClick */
    handleClick: PropTypes.func,
    /** Custom classname */
    className: PropTypes.string,
}

Tag.defaultProps = {
    kind: 'neutral'
}

export default Tag;