import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Menu.css';

const Item = (props) => { 
    return (
        <li className={`
            ${props.nav ? 'nav__item' : 'menu__item'}
            ${props.dropdown ? 'menu__item--dropdown' :''} 
            ${props.active ? 'menu__item--active' :''} `} 
            onClick={props.handleClick} 
            value={props.value}
            style={props.style}
            >
                {props.children}
        </li> 
    )
}

const MenuItem = (props) => {
    if(props.nav) {
        return ( <NavLink to={props.path} activeClassName="nav__item--active">
            <Item {...props}/>
        </NavLink>
        )
    }

    if(props.link) {
        return (<Link to={props.path}> 
            <Item {...props}/>
        </Link>)
    }

    return (
       <Item {...props}/>
    );
}
 
MenuItem.propTypes = { 
    /**If the item is a <NavLink/>*/
    nav: PropTypes.bool,
    /**If the item is a <Link/> */
    link: PropTypes.bool,
    /**If the item is a part of a dropdown menu*/
    dropdown: PropTypes.bool,
    /**If the item is active*/
    active: PropTypes.bool,
    /** Function to call onClick */
    handleClick: PropTypes.func,
    /** Component value */ 
    value: PropTypes.node,
    /** Custom classname */ 
    className: PropTypes.string,
    /** Custom styles */ 
    style: PropTypes.object,
    /** Component's children */
    children: PropTypes.node.isRequired
}

export default MenuItem;
