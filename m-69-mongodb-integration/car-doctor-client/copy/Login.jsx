import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {
    const [show, setShow]=useState(false)
    const {signInUser, googleSign, githubSign}=useContext(AuthContext)
    const [error, setError]=useState('')
    const [success, setSuccess] = useState('');
    const navigate =useNavigate()
    const location = useLocation()
    // console.log(location)

    const from =location.state?.from?.pathname || '/'

    const handleLoginWithMail=event=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        console.log(email, password)

        setError('');
        setSuccess('');
        

        signInUser(email, password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            form.reset();
            setSuccess('User login successful.');
            setError('');
            navigate(from, {replace: true})

        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            console.log(error)
        });
    }

    const handleGoogleSignIn=()=>{
    googleSign()
    .then((result) => {
        const loggedUser= result.user;
        console.log(loggedUser)
        navigate(from, {replace: true})
        })
        .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        });
    }

    const handleGithubSignIn=()=>{
        githubSign()
        .then((result) => {
            const loggedUser= result.user;
            console.log(loggedUser)
            navigate(from, {replace: true})
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }


    return (
        <div className='container mx-auto flex flex-col items-center justify-center px-6 py-8 lg:py-0 my-8'>
            <div className="bg-base-200 w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Sign in to your account</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginWithMail} className="card-body">
                            <div className="form-control">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                <input type="text" name='email' placeholder="Your Email" className="border border-gray-300 rounded-lg bg-gray-50 text-gray-900 sm:text-sm block w-full p-2.5" required/>
                            </div>
                            <div className="form-control ">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <div class="bg-gray-50 flex border border-gray-300 rounded-lg">
                                    <input type={show ? "text" : "password"} name="password" id="password" placeholder="••••••••" class="bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""/>
                                    <button onClick={()=> setShow(!show)} type="button" class="px-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5"><path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z"></path><path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z"></path><path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z"></path></svg>
                                    </button>
                                </div>
                            </div>                            
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"/>
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <a class="text-sm font-medium text-primary-600 hover:underline" href="/login">Forgot password?</a>
                            </div>
                            <button type="submit" class="w-full text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <div class="flex flex-col">
                                <div class="relative py-2">
                                    <div class="absolute inset-0 flex items-center">
                                        <div class="w-full border-b border-gray-300">
                                        </div>
                                    </div>
                                    <div class="relative flex justify-center">
                                        <span class="bg-white px-4 text-sm text-gray-500">Or login with</span>
                                    </div>
                                </div>
                                <div class="flex justify-center items-center gap-4 mt-2">
                                    <button onClick={handleGoogleSignIn} className="flex items-center text-white px-4 bg-red-400 py-2.5 border-0 font-medium rounded-lg text-sm hover:bg-red-500"><FaGoogle className='mr-1'></FaGoogle> Google</button>
                                    <button onClick={handleGithubSignIn} className="flex items-center text-white px-4 ml-3 bg-red-400 py-2.5 border-0 font-medium rounded-lg text-sm hover:bg-red-500"><FaGithub className='mr-1'></FaGithub> Github</button>
                                </div>
                            </div>
                            <p class="text-sm font-light text-gray-500">Don’t have an account yet? 
                                <Link class="ml-2 font-medium text-primary-600 hover:underline" to="/login">Sign up</Link>
                            </p>  
                            <div class="bg-white alert alert-error">
                                <div>
                                    <span class="text-red-500">{error}</span>
                                    <span><p className='text-green-600'>{success}</p></span>
                                </div>
                            </div>                   
                        </form>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;