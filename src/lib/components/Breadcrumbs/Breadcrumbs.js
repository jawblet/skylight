import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({ crumbs }) => {
    return ( 
        <nav className="breadcrumbs">
            {crumbs.map((el, i) => {
                return (
                    <Link to={`${el.path}`} key={i} className="crumb">
                            <h4>{el.label}</h4>
                            {i + 1 !== crumbs.length && 
                            <h4>/</h4>}
                    </Link> 
                    )
                })}
        </nav>       
        )
}
 
export default BreadCrumbs;
