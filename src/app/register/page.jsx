import FormRegister from '../../components/ui/form';

export default function Register() {
    return (
        <div className='flex flex-col justify-center items-center w-screen h-80 gap-3'>
            <div className="flex flex-row justify-center items-center">
                <h1 className="font-bold text-4xl">Create your account</h1>
            </div>
            <div className="flex flex-row justify-center items-center w-1/3">
                <FormRegister />
            </div>
        </div>
    )
}