import React, { useState, useEffect } from "react";
import { userDetials } from "../Redux/UserDetialSlicer.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../Axios/Axios.js";
import { mobileNoInput, emailInput } from "../Utils/reusableInputFields.js";

const Register = () => {
  const navigate = useNavigate();
  const [trialInputValues, setTrialInputValue] = useState({
    company_name: "",
    name: "",
  });
  const [mobileNumber, setMobileNumber] = useState({ mobile_no: "" });
  const [emailAddress, setEmailAddress] = useState({ email_address: "" });
  const [btnDisable, setBtnDisable] = useState(true);
  const [res, setRes] = useState("");
  const dispatch = useDispatch();
  const dataObj = {
    company_name: trialInputValues.company_name,
    name: trialInputValues.name,
    mobile_number: mobileNumber.mobile_no,
    email: emailAddress.email_address,
  };
  useEffect(() => {
    if (
      trialInputValues.company_name &&
      trialInputValues.name &&
      mobileNumber.mobile_no &&
      emailAddress.email_address
    ) {
      setBtnDisable(false);
    }
  }, [
    trialInputValues.company_name,
    trialInputValues.name,
    mobileNumber.mobile_no,
    emailAddress.email_address,
  ]);
  const handleFormInputs = (e) => {
    setTrialInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submitResponse = async (e) => {
    e.preventDefault();
    try {
      if (
        trialInputValues.company_name &&
        trialInputValues.name &&
        mobileNumber.mobile_no &&
        emailAddress.email_address
      ) {
        console.log(trialInputValues, "response", mobileNumber, emailAddress);
        await AxiosInstance.post("post-user/", dataObj)
          .then((response) => {
            setRes(
              response?.data ? "Registered Succesfully" : "Try again later"
            );
            setTrialInputValue({
              company_name: "",
              name: "",
            });
            setEmailAddress({ email_address: "" });
            setMobileNumber({ mobile_no: "" });
            setBtnDisable(true);
            dispatch(userDetials(response?.data.id));
            navigate("/profile");
          })
          .catch((err) => {
            setRes(
              !err.message ? err.response?.data.mobile_number : err.message
            );
          });
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <form onSubmit={(e) => submitResponse(e)} className="form-container">
      <label className="form-fields">
        Company Name:<span className="requiredField">*</span>
        <input
          type="text"
          name="company_name"
          value={trialInputValues.company_name}
          onChange={handleFormInputs}
          className="textBox"
        />
      </label>
      <label className="form-fields">
        Name:<span className="requiredField">*</span>
        <input
          type="text"
          name="name"
          value={trialInputValues.name}
          onChange={handleFormInputs}
          className="textBox"
        />
      </label>
      <label className="form-fields">
        Mobile No:<span className="requiredField">*</span>
        <input
          type="text"
          name="mobile_no"
          value={mobileNumber.mobile_no}
          onChange={(e) => mobileNoInput(setMobileNumber, e)}
          className="textBox"
        />
      </label>
      <label className="form-fields">
        Email Address:<span className="requiredField">*</span>
        <input
          type="email"
          name="email_address"
          value={emailAddress.email_address}
          onChange={(e) => emailInput(setEmailAddress, e)}
          className="textBox"
        />
      </label>
      <input type="submit" value={"CREATE ACCOUNT"} disabled={btnDisable} />
    </form>
  );
};

export default Register;
