import React, { useState } from 'react'; 

const Tree = ({label, tag, ...props}) => { 
    const [branch, showBranch] = useState(false);
    
    return (
            <div className={branch ? 'tree' : ''} 
                onMouseEnter={() => showBranch(true)}
                onMouseLeave={() => showBranch(false)}
                >
                {branch && 
                    <code className="tree__name">
                       <span className="tree__tag">{tag}</span>
                       <span className="tree__label">{label}</span>
                    </code> 
           }
                {props.children}
            </div> 
    );
}
 
export default Tree;
