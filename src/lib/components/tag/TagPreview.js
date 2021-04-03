import React from 'react';
import Flex from '../layout/Flex';
import Blur from '../atoms/Blur';

const TagPreview = ({bg, ...props}) => {
    return (
        <Flex middle gap={0.5}>
            <Blur bg={bg}/>
            {props.children} 
        </Flex>
    );
}
 
export default TagPreview;