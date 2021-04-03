import React from 'react';
import { WiMoonAltWaxingCrescent2 } from 'react-icons/wi';
import { WiMoonAltWaningGibbous2 } from 'react-icons/wi'; 
import Tree from './Tree';

const ShowPass = (props) => {
    
    return ( 
        <Tree label="ShowPass">
        <div className="showPass">
        {!props.show ? 
          <WiMoonAltWaxingCrescent2 className="icon" onClick={props.handleShowPass}/> 
          :   <WiMoonAltWaningGibbous2 className="icon" onClick={props.handleShowPass}/> }
          </div>
      </Tree>
    );
}
 
export default ShowPass;