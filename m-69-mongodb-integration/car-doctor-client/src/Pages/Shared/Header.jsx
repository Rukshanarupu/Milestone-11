import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const {user, logOut}=useContext(AuthContext)
    // console.log(user)

    const handleLogout=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error.message)
        })
    }

    return (
        <div className='container mx-auto navbar bg-base-100'>
            <div className="navbar-start">
                <Link to='./' className="">
                    <img className='w-24 md:w-full' src='https://www.themeenergy.com/themes/wordpress/social-chef/wp-content/themes/socialchef/images/ico/logo.png' alt="" />
                </Link>
            </div>
            <div className="navbar-center ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn my-btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/">Home</NavLink></li>
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/blog">Blog</NavLink></li>
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/about">About</NavLink></li>
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/login">Login</NavLink></li>
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/signup">Sign up</NavLink></li>
                    </ul>
                </div>
                <div className='hidden lg:flex'>
                    <ul className="menu menu-horizontal px-1">
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/">Home</NavLink></li>
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/blog">Blog</NavLink></li>
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/about">About</NavLink></li>
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/login">Login</NavLink></li>
                        <li className='mx-1'><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/signup">Sign up</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                {
                    user ? 
                    <div className='flex items-center'>
                        <div className='tooltip tooltip-bottom tooltip-success ' data-tip={user.displayName}>
                            <img className='border-1 border-red-400 rounded-full w-10' src={user.photoURL} alt="" />
                        </div>
                        <a onClick={handleLogout} href='' className="my-btn ml-3">Sign Out</a>
                    </div> : 
                    <Link to='/login' className="btn my-btn">Login</Link>
                }
            </div>

        </div>
    );
};

export default Header;