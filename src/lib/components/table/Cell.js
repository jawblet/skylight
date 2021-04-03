import React from 'react';

const Cell = (props) => {
    const { label, 
            highlight,
            font} = props;
 
    return ( 
    <td className='table__cell'> 
        <p className={`${font} ${highlight}`}>
            {label}
        </p>
    </td>);
}
 
export default Cell;