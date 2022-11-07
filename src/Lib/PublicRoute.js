import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const isLogin = window.localStorage.getItem("isLogin");
    console.log(isLogin);
    if(isLogin === "true") alert("유효하지 않는 접근입니다.");

  return isLogin === "true" ? <Navigate to="/home"/> : children;
};


export default PublicRoute;