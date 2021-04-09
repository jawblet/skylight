import React, { useState, useContext } from 'react'; 
//import { TreeContext } from '../../../hooks/TreeContext';

const Tree = ({label, tag, ...props}) => { 
    const { tree } = useContext(TreeContext);
    
    const [branch, showBranch] = useState(true);

   // if(!tree) {
   //     return props.children
   // }
    
    return (
            <div className={branch ? 'tree' : ''} 
                style={{width:props.width}}
               // onMouseEnter={() => showBranch(true)}
               // onMouseLeave={() => showBranch(false)}
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
