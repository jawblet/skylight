import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Item = ({ item, ...props }) => {
    return (
            <li className={`menu__item ${props.dropdown ? 'menu__item--dropdown' :''}`} 
                onClick={props.handleClick} 
                data-id={item.id}> 
                    {props.children}
            </li> 
    )
}

const MenuItem = (props) => {
    if(props.nav) {
        return ( <NavLink to={props.item.path} activeClassName="menu__item--active">
            <Item {...props}/>
        </NavLink>
        )
    }

    if(props.link) {
        return (<Link to={props.item.path}> 
            <Item {...props}/>
        </Link>)
    }

    return (
       <Item {...props}/>
    );
}
 
export default MenuItem;
