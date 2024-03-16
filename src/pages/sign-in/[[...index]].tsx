import { SignIn } from '@clerk/nextjs';

const SignInPage = () => (
    <div className='w-full h-screen flex flex-col justify-center items-center'>

        <SignIn />
    </div>
);

export default SignInPage;