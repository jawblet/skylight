import React from 'react'; 
import Flex from './layout/Flex';

const Badge = ({ value }) => {
    return (
            <Flex center middle className={`badge ${!value ? 'badge--none' :''} `}>
                <h4 className="heavy">{value || 0}</h4>
            </Flex>
    );
}
 
export default Badge;