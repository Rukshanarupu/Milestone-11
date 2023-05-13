import React from 'react';
import Login from '../Pages/Shared/Login';
import SignUP from '../Pages/Shared/SignUp';
import Layout from '../Layouts/Layout'
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Pages/Blog';
import About from '../Pages/About';
import ErrorElement from '../Pages/ErrorElement'
// import AuthProviders from './Providers/AuthProviders';
import PrivateRoute from './PrivateRoute';
import Home from '../Pages/Home/Home';
import ChefDetails from '../Pages/Home/ChefDetails';
import Terms from '../Pages/Shared/Terms';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: '/chefs/:id',
          element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
          loader: () => fetch('https://b7a10-chef-recipe-hunter-server-side-rukshanarupu-rukshanarupu.vercel.app/chefs')
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUP></SignUP>
        },
        {
          path: '/SignUp/terms',
          element: <Terms></Terms>
        }
      ]
    }
  ])

export default router;