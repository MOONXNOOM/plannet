import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const isLogin = window.localStorage.getItem("isLogin");
    console.log(isLogin);
    if(isLogin !== "true") alert("로그인 후 이용해주세요.");

  return isLogin === "true" ? children : <Navigate to="/"/>;
};

export default PrivateRoute;