import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
//import '../../../node_modules/prismjs/components/prism-scss'; 
//import '../../../node_modules/prismjs/components/prism-jsx'; 
import './_styles/assets/prism.css';

const Codeblock = ({ code, lang, ...props }) => {  
   const [expand, setExpand] = useState(false);

    useEffect(() => {
        Prism.highlightAll(); 
    }, [code]);

    return ( 
            <div className="codeblock" style={{maxHeight: expand ? '' : props.maxHeight}}>
                <pre className="line-numbers">
                <code className={`language-${lang}`}>
                    {code}
                </code>
                </pre>
            {props.maxHeight && 
            <div className="fade pointer" onClick={() => setExpand(!expand)}>
                </div>}
        </div>
        
     );
}
 
export default Codeblock; 