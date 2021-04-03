import React, { useState } from 'react';
import Input from './Input';
import Flex from '../layout/Flex';

const Password = ({ confirm }) => {
    const [show, setShow] = useState(false);

    const handleShowPass = () => {
        setShow(!show);
    }

    return (
        <Flex column gap={1}>
            <Input type={show ? 'text' : 'password'} placeholder="Password" 
                    showPass show={show} handleShowPass={handleShowPass}/>
                    {confirm && <Input type={show ? 'text' : 'password'} placeholder="Confirm password"
                />}
        </Flex>
    );
}
 
export default Password;