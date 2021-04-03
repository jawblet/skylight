import React from 'react';

const EditorTitle = (props) => {

    if(!props.title){
        return null;
    }

    return (
        <input type="text" className="editor__title" 
                value={props.title}
                onChange={props.onTitleChange}
                onKeyDown={(e) => {
                    if(e.keyCode === 13) {
                        e.preventDefault();
                        }
                    }}
            />
    );
}
 
export default EditorTitle;