import { useSelector } from "react-redux";
import { Navigate, NavigateProps } from "react-router-dom";
import React from 'react'

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to='/landing' />;
  }
  return children;
};

export default ProtectedRoute
