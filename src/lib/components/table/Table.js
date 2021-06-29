import React from 'react';
import TableHeader from './TableHeader';

const Table = ({rows, headings, ...props}) => {
    return (
        <table className="table" style={{gridTemplateColumns:props.columns}} >
            <TableHeader headings={headings} />
            <tbody>
                {props.children}
            </tbody>
        </table>
    );
}
 
export default Table;