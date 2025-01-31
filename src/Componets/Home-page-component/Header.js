import React, { useEffect, useState } from "react";
import "../../Styles/Home.css";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
const Header = () => {
  const [state, setState] = useState(true);
  const nav = useNavigate();
  const isLoggedIn = localStorage.getItem(
    "login" || "admin" || "registered-user"
  );
  useEffect(() => {
    if (isLoggedIn) {
      setState(true);
    } else {
      setState(false);
    }
  }, [isLoggedIn]);
  const logout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("registered-user");
    localStorage.removeItem("admin");
    setState(false);
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
          {state ? (
            <button
              className="signUpBtn cursorPointer fontFamilyBtn"
              onClick={() => logout()}
              style={{ color: "#504F4E" }}
            >
              LogOut
            </button>
          ) : null}
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
