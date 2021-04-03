import React from 'react';
import Flex from './layout/Flex';
import Blur from './atoms/Blur';
import Line from './atoms/Line';

const Notification = ({message, ...props}) => {
    return (
    <>  
        <Flex gap={1} middle className={`notification ${!props.read ? 'notification--unread' : ''}`}>
                {!props.read 
                ? <Blur bg={'var(--accent2)'}/> 
                : <Blur bg=''/>}
                <Flex column>
                    <p>{message}</p>
                    <h6 className="light">{props.time}</h6>
                </Flex>
        </Flex>
        {(props.num && props.num !== props.max) 
            && <Line col='menu'/>}
    </>
    )
}
 
export default Notification;

/*
{props.message}
{props.time}
*/