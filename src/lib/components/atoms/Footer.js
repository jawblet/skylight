import React from 'react';
import Flex from '../layout/Flex';
import Button from '../btn/Button';

const Footer = ({ primary, secondary }) => {

    return ( 
        <Flex width="100%" right gap={3}> 
            {secondary && 
                    <Button label={secondary.label}
                        kind = {secondary.kind || 'inline'}
                        />}
           {primary && 
                    <Button label={primary.label}
                        kind = {primary.kind || 'primary'}
                        />}
        </Flex>
    );
}
 
export default Footer;