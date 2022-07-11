import React from 'react';
import { PropTypes } from 'prop-types';

const Flex = (props) => {
    let mainAxis;
    let crossAxis;

    const getFlex = (props) => {
        const {
            inline, 
            column, 
            left, 
            center, 
            right, 
            between, 
            around, 
            top, 
            middle, 
            bottom,
            gap 
          } = props;


          if (left || center || right || between || around) {
            if (left) {
            mainAxis = "flex-start";
                } else if (center) {
            mainAxis = "center";
                } else if (right) {
            mainAxis = "flex-end";
                } else if (between) {
            mainAxis = "space-between";
                } else if (around) {
            mainAxis = "space-around";
            }
        }

        if (top || middle || bottom) {
            if (top) {
            crossAxis = "flex-start";
            } else if (middle) {
            crossAxis = "center";
            } else if (bottom) {
            crossAxis = "flex-end";
            } else {
            crossAxis = "stretch"
            }
        }

    // if vertical flip it
    if (column) {
        if (left || center || right) {
        if (left) {
            crossAxis = "flex-start"; 
        } else if (center) {
            crossAxis = "center";
        } else if (right) {
            crossAxis = "flex-end";
        }
        }

        if (top || middle || bottom || between || around) {
            if (top) {
                mainAxis = "flex-start";
            } else if (middle) {
                mainAxis = "center";
            } else if (bottom) { 
                mainAxis = "flex-end";
            } else if (between) {
                mainAxis = "space-between";
            } else if (around) {
                mainAxis = "space-around";
            }
        }
      }

      return {
          display: inline ? "inline-flex" : "flex",
          flexDirection: props.column ? "column" : "row",
          flexWrap: props.wrap ? "wrap" : "nowrap",
          justifyContent: mainAxis,
          alignItems: crossAxis,
          width: props.width,
          height: props.height,
          gap: `${gap}rem`,
          position: 'relative'
      }
    }

    return (
        <div style={getFlex(props)}
            className={props.className}
            data-id={props.id}
            onClick={props.handleClick}>
            {props.children}
        </div>
    );
}

Flex.propTypes = {
    /** Flex or inline-flex  */
    inline: PropTypes.bool,
    /** Row or column */ 
    column: PropTypes.bool,
    /** Wrap or no wrap */
    wrap: PropTypes.bool,
    /** Justify-content: start  */ 
    left: PropTypes.bool,
    /** Justify-content: center */
    center: PropTypes.bool,
    /** Justify-content: right */  
    right: PropTypes.bool,
    /** Justify-content: space-between */
    between: PropTypes.bool,
    /**  Justify-content: space-around */ 
    around: PropTypes.bool,
    /**  Align-items: start */ 
    top: PropTypes.bool,
    /** Align-items: center */
    middle: PropTypes.bool,
    /** Align-items: end  */
    bottom: PropTypes.bool, 
    /** Gap */
    gap: PropTypes.number, 
    /** Height */
    height: PropTypes.string, 
    /** Width */
    width: PropTypes.string,
    /** Function to call onClick*/
    handleClick: PropTypes.func,
    /** Data id */ 
    id: PropTypes.node,
    /** Custom classname */ 
    className: PropTypes.string, 
}

Flex.defaultProps = {
    inline: false,
    column: false,
    wrap: false,
    gap: 0
}
 
export default Flex;