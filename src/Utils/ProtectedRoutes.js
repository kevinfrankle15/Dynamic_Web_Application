import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = () => {
  var userDetail = JSON.parse(localStorage.getItem("registered-user"));
  // const user = userDetail?.id;
  const user = userDetail?.userId ? true : false;

  return user ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;
