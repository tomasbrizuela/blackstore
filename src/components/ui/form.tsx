'use client'
import { Input } from './input';
import { Button } from './button';
import { AuthUser, LoginUser } from '../../../authService.js'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'


export default function FormRegister() {

    const router = useRouter();

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

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        let user = await AuthUser(userData);
        if (user) {
            router.push('/login')
        } else {
            router.push('/register')
        }
    }

    return (
        <form onSubmit={handleSubmit} method='POST' className='flex flex-col justify-center items-center gap-3 w-full'>
            <Input name='name' type='text' placeholder='john doe' onChange={e => handleChange(e)} />
            <Input name='email' type='email' placeholder='name@email.com' onChange={e => handleChange(e)} />
            <Input name='password' type='password' placeholder='password' onChange={e => handleChange(e)} />
            <Button type="submit" className='w-full'>Create</Button>
        </form>
    );
}

export function FormLogin() {
    const router = useRouter();

    const [userInfo, setUserInfo] = useState({
        'email': '',
        'password': ''
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let { name, value } = e.target
        setUserInfo(prev =>
        ({
            ...prev,
            [name]: value
        })
        )
    }

    async function handleLogin(e: React.FormEvent) {
        console.log(userInfo)
        e.preventDefault()
        let user = await LoginUser(userInfo)
        console.log(user)
        if (user) {
            router.push('/home')
        } else {
            router.refresh()
        }
    }

    return (
        <form onSubmit={handleLogin} method='POST' className='flex flex-col justify-center items-center gap-3 w-full'>
            <Input name='email' type='email' placeholder='john@gmail.com' onChange={handleChange} />
            <Input name='password' type='password' placeholder='pasSWord1092!$#' onChange={handleChange} />
            <Button type='submit' className='w-full'>Log in</Button>
        </form>
    );
}