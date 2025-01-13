import React from "react";
import "../../Styles/Home.css";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
const Header = () => {
  const nav = useNavigate();
  const logout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("registered-user");
  };
  return (
    <>
      <div className="header ">
        <Typography
          variant="h4"
          component="h1"
          color="primary.main"
          sx={{
            mb: 1,
            ml: 1,
            fontFamily: "Century",
            "&:hover": {
              color: "secondary.main",
              cursor: "pointer",
            },
          }}
        >
          Commodity
        </Typography>
        <div>
          <button
            className="signUpBtn cursorPointer fontFamilyBtn"
            onClick={() => logout()}
            style={{ color: "#504F4E" }}
          >
            LogOut
          </button>
          <button
            className="signUpBtn cursorPointer fontFamilyBtn"
            onClick={() => nav("/contact")}
            style={{ color: "#504F4E" }}
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
