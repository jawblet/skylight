import React from 'react'; 
import { VscClose } from 'react-icons/vsc';

const accent = {
    backgroundColor: `var(--accent)`,
    color: `var(--accent3)`,
}

const sand = { 
    backgroundColor: `var(--sand2)`,
    color: `var(--body-light)`,
}

export const Tag = ({ color, bg, chip, ...props }) => {
    return (
        <div className='tag' style={{backgroundColor:bg, color: color}}> 
            {props.children}
            {chip &&  <VscClose className="tag__X" onClick={props.handleClick}
                        style={{color:color}}
                    />}
        </div> 
    );
};

export const AccentTag = ({ chip, ...props }) => {
    return (
        <div className="tag" style={accent}>
            {props.children}
            {chip &&  <VscClose className="tag__X" onClick={props.handleClick}
                style={{color:accent.color}}/>}
        </div>
    )
}

export const SandTag = ({ chip, ...props }) => {
    return (
        <div className="tag" style={sand}>
            {props.children} 
            {chip &&  <VscClose className="tag__X" onClick={props.handleClick}/>}
        </div>
    )
}


