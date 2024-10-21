import React, { useState } from "react";

const Inputs = ({ type, Invalue, placeholder, required, Inname }) => {
  const [val, setVal] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    role: "",
    branch: "",
  });
  const handleChange = (e) => {
    let value = e.target.value;
    setVal({ [e.target.name]: value });
    Invalue((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const switchFunction = (type) => {
    switch (type) {
      case "text":
        return (
          <input
            type="text"
            value={val.userName}
            name={Inname}
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
          />
        );
      case "number":
        return <input />;
      case "password":
        return (
          <input
            type="text"
            value={val.password}
            name={Inname}
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
          />
        );
      case "button":
        return <input type="button" value="submit" />;
      default:
        return null;
    }
  };
  return <p>{switchFunction(type)}</p>;
};

export default Inputs;
