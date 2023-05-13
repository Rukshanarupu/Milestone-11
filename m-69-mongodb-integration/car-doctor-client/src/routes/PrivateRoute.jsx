import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const PrivateRoute = ({ children }) => {
    const {user, loading}=useContext(AuthContext)
    const location = useLocation()
    // console.log(location)

    if(loading){
        return (
            // <button className="btn loading">loading</button>
            <div>Loading.........</div>

        )
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>;
};

export default PrivateRoute;