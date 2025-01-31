import React, { useState } from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import profile from "../../Images/profile.png";
import AxiosInstance from "../../Axios/Axios";
import { Alertt } from "../../Utils/Material-ui";
import { Outlet, useNavigate } from "react-router-dom";

const Admin = () => {
  const providers = [{ id: "credentials", name: "Credentials" }];
  const [trig, setTrig] = useState(false);
  const [fetchResponse, setFetchResponse] = useState({
    code: "info",
    message: "Checking",
  });
  const navigate = useNavigate();
  const BRANDING = {
    logo: <img src={profile} alt="MUI logo" style={{ height: 24 }} />,
    title: "Admin",
  };

  const signIn = async (provider, formData, callbackUrl) => {
    console.log(provider);
    const promise = new Promise((resolve, reject) => {
      const email = formData?.get("email");
      const password = formData?.get("password");

      const authData = {
        name: email,
        password: password,
      };
      if (resolve) {
        AxiosInstance.post(`/admin-login/`, authData)
          .then((response) => {
            setFetchResponse({
              code: response.status,
              message: "Login Successful",
            });
            setTrig(true);
            localStorage.setItem("admin", JSON.stringify(response.data));
            setTimeout(() => navigate("/customer-log"), 500);
          })
          .catch((err) => {
            setFetchResponse({ code: 400, message: err.response.data });
            setTrig(true);
          });
      }
      if (reject) {
        setFetchResponse({ code: 400, message: "Something Went Wrong" });
      }
    });

    return promise;
  };
  const theme = useTheme();
  return (
    <>
      {trig && <Alertt prop={fetchResponse} />}
      <AppProvider branding={BRANDING} theme={theme}>
        <SignInPage
          signIn={signIn}
          providers={providers}
          slotProps={{ emailField: { autoFocus: false } }}
        />
      </AppProvider>
      <Outlet />
    </>
  );
};
export default Admin;
