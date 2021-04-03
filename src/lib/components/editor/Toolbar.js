import React from 'react'; 
import IconButton from '../btn/IconButton';
import SelectMenu from '../menu/SelectMenu'; 
import { HEADINGS, INLINE_STYLES, BLOCK_TYPES } from '../../data';

export default function Toolbar(props) {
  const currentInlineStyle = props.editorState.getCurrentInlineStyle();
  const selection = props.editorState.getSelection();
  const blockType = props.editorState.getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const setBlockType = (e) => { 
      e.preventDefault()
      props.toggleBlockType(e);
  }
 
    return (
        <div className={`toolbar ${props.styled ? `toolbar--styled` : ''}`}>
            {INLINE_STYLES.map((type) => {
                return (
                  //this keeps the focus w/n the editor on inline style change
                  <div data-id={type.style} key={type.style}
                        onMouseDown={(e) => { 
                            e.preventDefault();
                            props.onToggleInline(e);
                          }}>
                <IconButton inline
                        key={type.label}  
                        icon={type.icon}
                        active={currentInlineStyle.has(type.style)}
                        dataId={type.style}
                        />
                    </div>
                    )   
                })}
            {BLOCK_TYPES.map((type) => {
                return (
                  <div data-id={type.style} key={type.style}
                          onMouseDown={setBlockType}>
                    <IconButton inline
                            icon={type.icon}
                            active={type.style === blockType}
                            dataId={type.style}
                            />
                    </div> 
                    )
                })}
               <SelectMenu 
                  allItems={HEADINGS} 
                  initValue={(blockType.substring(0,6) === 'header') ? blockType : 'paragraph'} 
                  selectItem={setBlockType}/>
        </div>
    )
}

