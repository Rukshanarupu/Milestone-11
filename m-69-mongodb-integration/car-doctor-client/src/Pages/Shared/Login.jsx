import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import login from '../../assets/images/login/login.svg'


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
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-red-500">
                <form  onSubmit={handleLoginWithMail} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div class="bg-gray-50 flex border border-gray-300 rounded-lg">
                            <input type={show ? "text" : "password"} name="password" id="password" placeholder="password" class="input input-bordered block w-full" required=""/>
                            <button onClick={()=> setShow(!show)} type="button" class="px-2">
                                {
                                    show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </button>
                        </div>
                        <label className="label">
                            <Link class="text-sm font-medium text-primary-600 hover:underline" to="/login">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn my-btn">Login</button>
                    </div>
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
                           <button onClick={handleGoogleSignIn} className="flex items-center text-white px-4 bg-red-400 py-2.5 t-medium rounded-lg text-sm hover:bg-red-500"><FaGoogle className='mr-1'></FaGoogle> Google</button>
                           <button onClick={handleGithubSignIn} className="flex items-center text-white px-4 ml-3 bg-red-400 py-2.5 t-medium rounded-lg text-sm hover:bg-red-500"><FaGithub className='mr-1'></FaGithub> Github</button>
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
                <div className="text-center lg:text-left">
                    <img src={login} alt="" />
                </div>
            </div>
            </div>

        // <div className='container mx-auto flex flex-col items-center justify-center px-6 py-8 lg:py-0 my-8'>
        //     <div className="bg-base-200 w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        //         <div className="hero-content flex-col">
        //                    
        //                     
        //                     <div class="flex flex-col">
        //                         <div class="relative py-2">
        //                             <div class="absolute inset-0 flex items-center">
        //                                 <div class="w-full border-b border-gray-300">
        //                                 </div>
        //                             </div>
        //                             <div class="relative flex justify-center">
        //                                 <span class="bg-white px-4 text-sm text-gray-500">Or login with</span>
        //                             </div>
        //                         </div>
        //                         <div class="flex justify-center items-center gap-4 mt-2">
        //                             <button onClick={handleGoogleSignIn} className="flex items-center text-white px-4 bg-red-400 py-2.5 border-0 font-medium rounded-lg text-sm hover:bg-red-500"><FaGoogle className='mr-1'></FaGoogle> Google</button>
        //                             <button onClick={handleGithubSignIn} className="flex items-center text-white px-4 ml-3 bg-red-400 py-2.5 border-0 font-medium rounded-lg text-sm hover:bg-red-500"><FaGithub className='mr-1'></FaGithub> Github</button>
        //                         </div>
        //                     </div>
        //                     <p class="text-sm font-light text-gray-500">Don’t have an account yet? 
        //                         <Link class="ml-2 font-medium text-primary-600 hover:underline" to="/login">Sign up</Link>
        //                     </p>  
        //                     <div class="bg-white alert alert-error">
        //                         <div>
        //                             <span class="text-red-500">{error}</span>
        //                             <span><p className='text-green-600'>{success}</p></span>
        //                         </div>
        //                     </div>                   
        //                 </form>
                        
        //             </div>
        //         </div>
        //     </div>
            
        // </div>

    );
};

export default Login;