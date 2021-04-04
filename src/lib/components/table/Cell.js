import React from 'react';

const Cell = (props) => {

    return ( 
    <td className='table__cell'> 
      {props.children}
    </td>);
}
 
export default Cell;