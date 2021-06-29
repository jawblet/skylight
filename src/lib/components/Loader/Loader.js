import React from 'react'; 
import Flex from '../layout/Flex';
import PropTypes from 'prop-types'; 
import './Loader.css';
import '../_global.css';

const Loader = (props) => {

    Loader.propTypes = {
        /** Inline or full-page */ 
        inline: PropTypes.bool,
    }

    return (
        <Flex middle center width="100%" height={props.inline ? "100%" : "80vh"}> 
           <code>loading...&nbsp; </code> 
           <span className="loading__cursor"></span>
        </Flex>
    );
}
 
export default Loader;