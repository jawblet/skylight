import React from 'react';
import TableHeader from './TableHeader';
import Cell from './Cell';

const Table = ({rows, headings}) => {
    return (
        <table className="table">
            <TableHeader headings={headings} />
            <tbody>
            {rows.map((el, i) => {
                    return <tr key={i} className="table__row"> 
                                <Cell label={el.prop}
                                     font="code"
                                     highlight="tag"
                                      />
                               <Cell label={el.type}
                                     font="code"
                                      />
                                <td className="table__cell"> 
                                    <h5>{el.note}</h5>
                                </td> 
                        </tr>
                    })}
            </tbody>
        </table>
    );
}
 
export default Table;