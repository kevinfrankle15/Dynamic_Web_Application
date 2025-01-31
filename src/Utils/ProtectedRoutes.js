import React from "react";
import { Outlet, Navigate } from "react-router-dom";
export const ProtectedRoutes = () => {
  const userDetailRegister = JSON.parse(
    localStorage.getItem("registered-user")
  );
  const userDetailLogin = JSON.parse(localStorage.getItem("login"));
  // const user = userDetailRegister?.id;
  const userReg = userDetailRegister?.id ? true : false;

  const userLog = userDetailLogin?.id ? true : false;
  return userReg || userLog ? <Outlet /> : <Navigate to="/" />;
};
export const ProtectedRoutesAdmin = () => {
  const admin = true;
  return admin ? <Outlet /> : <Navigate to="/" />;
};
// export default ProtectedRoutes;
