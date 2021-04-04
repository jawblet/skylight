import React from 'react';
import TableHeader from './TableHeader';
import Cell from './Cell';

const Table = ({rows, headings, ...props}) => {
    return (
        <table className="table" style={{gridTemplateColumns:props.columns}} >
            <TableHeader headings={headings} />
            <tbody>
            {rows.map((el, i) => {
                    return <tr key={i}> 
                                <Cell>
                                    {el.name}
                                </Cell>
                               <Cell>
                                   {el.id}
                                </Cell>
                                <Cell>
                                   {el.description}
                                </Cell>
                                <Cell>
                                   {el.date}
                                </Cell>
                                
                        </tr>
                    })}
            </tbody>
        </table>
    );
}
 
export default Table;