import React from 'react';
import Flex from './layout/Flex';
import Blur from './atoms/Blur';

const Notification = ({message, ...props}) => {
    return (
    <div className={`notification ${!props.read ? 'notification--unread' : ''}`}
        onClick={props.handleClick}>
            {!props.read 
            ? <Blur bg={'var(--accent2)'}/> 
            : <Blur bg=''/>}
            <Flex column>
                <p>{message}</p>
                <h6 className="light">{props.time}</h6>
            </Flex>
    </div>
    )
}
 
export default Notification;

