import React from 'react';
import PageTitle from '../../../atoms/PageTitle'; 

const TitledPage = (props) => { 
    return (
        <div>
              <PageTitle title={props.title} style={{marginBottom:'1.5rem'}}/> 
              {props.children}
        </div>
    );
}
 
export default TitledPage;