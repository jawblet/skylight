import React from 'react';

const TableHeader = ( { headings }) => {
    return (
        <thead>
                <tr className="table__row"> 
                    {headings.map(label => {
                        return (
                        <th key={label} 
                                className="table__cell heavy"> 
                            {label}
                        </th> )
                        } )}
                </tr>
            </thead>
    );
}
 
export default TableHeader;