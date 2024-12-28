import React, { useEffect, useState } from "react";
import "../../Styles/Home.css";
import { defaultJson } from "../../Utils/DefaultInputsJson.js";
import "../../Styles/Home-page/LPContentOne.css";
import { mobileNoInput, emailInput } from "../../Utils/reusableInputFields.js";
import AxiosInstance from "../../Axios/Axios.js";
// import { useMediaQuery } from "react-responsive";
import { symbols } from "../../Utils/formats.js";
import { userDetials } from "../../Redux/UserDetialSlicer.js";
import { useDispatch } from "react-redux";

const LandingPageContent1 = () => {
  const [trialInputValues, setTrialInputValue] = useState({
    company_name: "",
    name: "",
  });
  const [mobileNumber, setMobileNumber] = useState({ mobile_no: "" });
  const [emailAddress, setEmailAddress] = useState({ email_address: "" });
  const [btnDisable, setBtnDisable] = useState(true);
  const [response, setResponse] = useState(null);
  const dispatch = useDispatch();

  const dataObj = {
    company_name: trialInputValues.company_name,
    name: trialInputValues.name,
    mobile_number: mobileNumber.mobile_no,
    email: emailAddress.email_address,
  };

  const handleFormInputs = (e) => {
    setTrialInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
            setResponse(
              response.data ? "Registered Succesfully" : "Try again later"
            );
            setTrialInputValue({
              company_name: "",
              name: "",
            });
            setEmailAddress({ email_address: "" });
            setMobileNumber({ mobile_no: "" });
            setBtnDisable(true);
            dispatch(userDetials(response.data.id));
          })
          .catch((err) => {
            setResponse(
              err ? err.response.data.mobile_number : "Network Error"
            );
          });
      }
    } catch (e) {
      console.log(e);
    }
  };

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
              Register Your Company Here &#8623;
            </h3>

            <div>
              <form
                onSubmit={(e) => submitResponse(e)}
                className="form-container"
              >
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
                <input
                  type="submit"
                  value={"CREATE ACCOUNT"}
                  disabled={btnDisable}
                />
              </form>
            </div>
            <span>
              {response == "Account Registered Succesfully" ? symbols.tick : ""}
              {response}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPageContent1;
