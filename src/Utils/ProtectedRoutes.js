import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = () => {
  const userDetailRegister = JSON.parse(
    localStorage.getItem("registered-user")
  );
  const userDetailLogin = JSON.parse(localStorage.getItem("login"));
  // const user = userDetailRegister?.id;
  const userReg = userDetailRegister?.id ? true : false;

  const userLog = userDetailLogin?.id ? true : false;
  return userReg || userLog ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoutes;
