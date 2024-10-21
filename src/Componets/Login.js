import React, { useState } from "react";
import Inputs from "../Utils/Inputs";
const Login = () => {
  const [inputValue, setInputValue] = useState({ userName: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.userName && inputValue.password) {
      console.log(inputValue.userName, "inputval", inputValue.password);
      //post login data
    }
  };
  return (
    <div>
      ADMIN IN
      <div>
        <form onSubmit={handleSubmit}>
          <Inputs
            type={"text"}
            placeholder={"Username"}
            Invalue={setInputValue}
            Inname={"userName"}
          />
          <Inputs
            type={"password"}
            placeholder={"password"}
            Invalue={setInputValue}
            Inname={"password"}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
export default Login;
