import React from 'react';
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc';
import PropTypes from 'prop-types';
import "./Paginate.css";
import "../_global.css"; 

const Paginate = (props) => {
    return ( 
        <>
        {(props.totalPages && props.totalPages > 1) ?
            <div className="paginate">
            {props.prevPage && 
            <VscArrowLeft className="icon icon__btn paginate__L" 
                        onClick={() => props.handleBackClick()}/>
                        }
            {(props.totalPages && props.totalPages > 1) &&
                <h4 className="paginate__pg" >
                    {props.page} of {props.totalPages}
                </h4> }
            {props.nextPage &&
                <VscArrowRight className="icon icon__btn paginate__R" 
                            onClick={() => props.handleFrontClick()}/>
                        } 
                 </div>
                 : null}
             </>
    )
}

Paginate.propTypes = {
    /** Current page */
    page: PropTypes.number.isRequired,
    /** Total pages */
    totalPages: PropTypes.number.isRequired,
    /** If the previous page exists */
    prevPage: PropTypes.bool,
    /** If the next page exists */
    nextPage: PropTypes.bool,
    /** Function to call onClick */
    handleClick: PropTypes.func,
}
 
export default Paginate;