import React from "react";
import "../../Styles/Home.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="header ">
        <p className="primary-fonts fontFamily">Commodity</p>
        <div>
          <button
            className="signUpBtn cursorPointer fontFamilyBtn"
            onClick={() => nav("/FreeTrialUser")}
          >
            SignIn
          </button>
          <button
            className="signUpBtn cursorPointer fontFamilyBtn"
            onClick={() => nav("/contact")}
          >
            contact
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
