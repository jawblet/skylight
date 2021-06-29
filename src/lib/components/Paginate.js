import React from 'react';
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc';
import PropTypes from 'prop-types';

const Paginate = (props) => {
    const { pageState, handleClick } = props; 
    const { page, totalPages, prevPage, nextPage } = pageState;

    return ( 
        <>
        {(totalPages && totalPages > 1) ?
            <div className="paginate">
            {prevPage && 
            <VscArrowLeft className="icon icon__btn paginate__L" 
                        onClick={() => handleClick(page - 1)}/>
                        }
            {(totalPages && totalPages > 1) &&
                <h4 className="paginate__pg" >
                    {page} of {totalPages}
                </h4> }
            {nextPage &&
                <VscArrowRight className="icon icon__btn paginate__R" 
                            onClick={() => handleClick(page + 1)}/>
                        }
                 </div>
                 : null
                }
             </>
         )
}

Paginate.propTypes = {
    /** Current page */
    page: PropTypes.number,
    /** Total pages */
    totalPages: PropTypes.number,
    /**If the item is a part of a dropdown menu*/
    prevPage: PropTypes.bool,
    /**If the item is a part of a dropdown menu*/
    nextPage: PropTypes.bool,
    /** Function to call onClick */
    handleClick: PropTypes.func,
}
 
export default Paginate;