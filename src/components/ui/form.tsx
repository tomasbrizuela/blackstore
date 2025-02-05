'use client'
import { Input } from './input';
import { Button } from './button';
import AuthUser from '../../../authService'
import { useState } from 'react';


export default function FormRegister() {
    const [userData, setUserData] = useState({
        'name': '',
        'email': '',
        'password': ''
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let { name, value } = e.target;
        console.log(name, value)
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    }


    return (
        <form onSubmit={() => AuthUser(userData)} className='flex flex-col justify-center items-center gap-3 w-full'>
            <Input name='name' type='text' placeholder='john doe' onChange={e => handleChange(e)} />
            <Input name='email' type='email' placeholder='name@email.com' onChange={e => handleChange(e)} />
            <Input name='password' type='password' placeholder='password' onChange={e => handleChange(e)} />
            <Button type="submit" className='w-full'>Create</Button>
        </form>
    );
}