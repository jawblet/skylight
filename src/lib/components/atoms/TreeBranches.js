import React, { useState, useContext } from 'react'; 
import { TreeContext } from '../../../hooks/TreeContext';

const TreeBranches = ({tag, ...props}) => { 
    const { tree } = useContext(TreeContext);
    const [branch, showBranch] = useState(false);

    if(!tree) {
        return props.children
    }
    
    return ( 
            <div className={branch ? 'treebranch' : ''} 
                style={{width:props.width, height:props.height}}
                 onMouseEnter={() => showBranch(true)}
                 onMouseLeave={() => showBranch(false)}
                > 
                {branch && 
                    <code className={`tree__name ${props.left ? 'tree__name--left' : ""}
                                                ${props.bottom ? 'tree__name--bottom' : ""}`}>
                    </code> 
                }
                {props.children}
            </div> 
    );
}
 
export default TreeBranches;
