import React from 'react';
import { Flex } from 'skylight-react'; 
import { VscEllipsis } from 'react-icons/vsc';


const Post = (props) => {
    return (
        <Flex column className="post">
            <Flex between className="padBottomS">
            <h4 className="light">{props.author}</h4>
            <Flex middle>
                <h4 className="lightest" style={{paddingRight:'1rem'}}>{props.date}</h4> 
                <VscEllipsis className="icon"/>
            </Flex>
            </Flex>
            <p>{props.text}</p>
        </Flex>
    );
}
 
export default Post; 