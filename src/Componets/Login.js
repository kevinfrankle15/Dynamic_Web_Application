import React, { useState } from "react";
// import Inputs from "../Utils/Inputs";
import { Form, Button } from "react-bootstrap";
import svg from "../Images/erp (1).svg";
import AxiosInstance from "../Axios/Axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    userNameOrEmail: "",
    password: "",
  });
  const authData = {
    name: inputValue.userNameOrEmail,
    password: inputValue.password,
  };
  const handleChange = (e) => {
    return setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (inputValue.userNameOrEmail && inputValue.password) {
        AxiosInstance.post("login/", authData)
          .then((response) => {
            console.log(response.data);
            localStorage.setItem("login", JSON.stringify(response.data[0]));
            navigate("/admin");
          })
          .catch((err) => {
            console.log(err.response.data);
            setInputValue({ userNameOrEmail: "", password: "" });
          });
      } else {
        setInputValue({ userNameOrEmail: "", password: "" });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        {/* <form onSubmit={handleSubmit}>
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
        </form> */}
        <Form>
          <Form.Group
            className="mb-3 col-sm-6 col-lg-6"
            controlId="formGroupEmail"
          >
            <Form.Control
              type="text"
              placeholder="Email / Username"
              name="userNameOrEmail"
              value={inputValue.userNameOrEmail}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 col-sm-6 col-lg-6"
            controlId="formGroupPassword"
          >
            <Form.Control
              type="text"
              placeholder="Password"
              name="password"
              value={inputValue.password}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Button
            style={{ background: "#EB6767", border: "none" }}
            onClick={(e) => handleSubmit(e)}
            disabled={
              inputValue.password && inputValue.userNameOrEmail ? false : true
            }
          >
            Login
          </Button>
        </Form>
      </div>
      <img src={svg} alt="svg" style={{ width: "50%", float: "inline-end" }} />
      <br />
    </div>
  );
};
export default Login;
