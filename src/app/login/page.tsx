import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { Separator } from "@/components/ui/separator"
import Link from 'next/link';

export default function LoginForm() {

    return (
        <>
            <div className='flex flex-col justify-center items-center w-screen h-80 gap-3'>
                <div>
                    <h1 className='text-4xl text-black font-bold'>Log in</h1>
                </div>
                <div className='flex flex-col justify-center items-center w-1/3 mx-auto gap-3'>
                    <Input type='email' placeholder='Your email' />
                    <Input type='password' placeholder='Your password' />
                    <Button className='w-full'>Log in</Button>
                    <Separator className='w-6/12'></Separator>
                    <div className='flex flex-row gap-2 justify-center item-center'>
                        <p className='text-sm'>New here?</p>
                        <Link href="/register" className='text-sm hover:underline'>
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}