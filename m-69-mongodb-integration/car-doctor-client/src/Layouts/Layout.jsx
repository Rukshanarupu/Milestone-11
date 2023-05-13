import React from 'react';
import Header from '../Pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from '../Pages/Shared/Footer';

const Layout = () => {
    return (
        <div className='font-poppins bg-base-200'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />

        </div>
    );
};

export default Layout;