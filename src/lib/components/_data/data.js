import React from 'react';
import { VscBold, VscItalic, VscCode, 
        VscQuote, VscSymbolNamespace, 
        VscListUnordered, VscListOrdered } from 'react-icons/vsc';

// for editor 
export const HEADINGS = [   
    {label: 'Paragraph', id: 'paragraph'},
    {label: 'H1', id: 'header-one'}, 
    {label: 'H2', id: 'header-two'},
    {label: 'H3', id: 'header-three'}, 
    {label: 'H4', id: 'header-four'},
    {label: 'H5', id: 'header-five'},
    {label: 'H6', id: 'header-six'}
];

export const INLINE_STYLES = [
    {label: 'bold', style: 'BOLD', icon: <VscBold/>},
    {label: 'italic', style: 'ITALIC', icon: <VscItalic/>},
    {label: 'monospace', style: 'CODE', icon: <VscCode/>}
  ];

export const BLOCK_TYPES = [
    {label: 'Blockquote', style: 'blockquote', icon: <VscQuote/> },
    {label: 'UL', style: 'unordered-list-item', icon: <VscListUnordered/>},
    {label: 'OL', style: 'ordered-list-item', icon: <VscListOrdered/>},
    {label: 'Code Block', style: 'code-block', icon: <VscSymbolNamespace/>}
  ];