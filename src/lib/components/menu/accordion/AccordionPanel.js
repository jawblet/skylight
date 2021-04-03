import React from 'react'; 
import Tree from '../../atoms/Tree';

const AccordionPanel = ({ panel, ...props }) => {
    return ( 
        <Tree label="AccordionPanel">
            <div className="accordion" key={panel.label}>
                <input type="checkbox" className="accordion__input" id={`${panel.label}`}
                    defaultChecked={panel.checked || false}
                    />
                <label className='accordion__label'
                    htmlFor={`${panel.label}`}>
                    <h4> {panel.label} </h4> 
                </label>
                    <menu className="accordion__list"> 
                        {props.children} 
                    </menu>
            </div>
        </Tree>
    );
}
 
export default AccordionPanel;