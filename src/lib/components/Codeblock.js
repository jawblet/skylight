import React from 'react';

const Codeblock = ({ code, lang }) => { 
    return ( 
        <div className="codeblock">
            <pre className="line-numbers">
            <code className={`language-${lang}`}>
                {code}
            </code>
            </pre>
        </div>
     );
}
 
export default Codeblock; 