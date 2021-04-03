import React, { useRef, useEffect } from 'react';
import { Editor } from 'draft-js';
import Toolbar from './Toolbar';
import EditorTitle from './EditorTitle';
import Flex from '../layout/Flex';

const RichEditor = (props) => {
    const editRef = useRef(null); 

       useEffect(() => { 
           editRef.current.focus();
        }, []);

    return ( 
        <Flex column width="100%">
       {props.rich && 
            <Toolbar editorState={props.editorState}
                        onToggleInline={props.toggleInlineStyle}
                        toggleBlockType={props.toggleBlockType}
                        />}
        <div className={`editorWrapper ${props.outline ? 'editorWrapper--outline' : '' } `}
            onClick={() => editRef.current.focus()}>
           {props.showTitle &&
                    <EditorTitle title={props.title}/>}
            <Editor editorState={props.editorState} 
                    ref={editRef} 
                    spellCheck={true}
                    onChange={props.onNoteChange}
                    handleKeyCommand={props.handleKeyCommand}
                    mapKeyToEditorCommand={props.mapKeyToEditorCommand}
                    />
        </div>
        </Flex>
       
    );
}
 
export default RichEditor;