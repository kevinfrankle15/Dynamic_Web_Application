import React, { useState } from "react";
import "../../Styles/Home.css";
import { defaultJson } from "../../Utils/DefaultInputsJson.js";
import "../../Styles/Home-page/LPContentOne.css";
// import { useMediaQuery } from "react-responsive";

import Login from "../Login.js";
import Register from "../Register.js";
const LandingPageContent1 = () => {
  const [switchComponent, setSwitchComponent] = useState("register");

  return (
    <div className="container-fluid ">
      <div className="row wrapper-Lft-Rgt-pane ">
        <div className="col-xs-12 col-sm-6 border-1 leftpane-LPC ">
          <h2 className="content-h responsive-font">
            ERP Software for Manifacturing Companies
          </h2>

          <ul style={{ width: "100%", padding: "5%" }} className="forCaurosel">
            {defaultJson.ourServices?.map((item, id) => (
              <li key={id} className="content">
                {item}
              </li>
            ))}
          </ul>
          <div></div>
        </div>
        <div className="col-xs-6 col-sm-5 col rightpane-LPC ">
          <div className="free-trial-container">
            <h3
              style={{
                color: "#eb6767",
              }}
              className="responsive-font"
            >
              {switchComponent === "register"
                ? `Register Your Company Here`
                : "Login Here"}
              &#8623;
            </h3>
            <div>
              {switchComponent === "register" ? <Register /> : <Login />}
            </div>

            <span
              style={{
                textDecoration: "underline",
                color: "blue",
                cursor: "pointer",
              }}
              onClick={() =>
                switchComponent === "register"
                  ? setSwitchComponent("login")
                  : setSwitchComponent("register")
              }
            >
              {switchComponent === "register"
                ? "already have an account"
                : "Register"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPageContent1;
