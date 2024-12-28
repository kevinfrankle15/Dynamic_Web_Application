import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import hero from "../Images/man1.jpg";
import "../Styles/Contact.css";
import { useNavigate } from "react-router-dom";
import EmailValidation from "../Utils/EmailValidation";
// import emailjs from "@emailjs/browser";
const Contact = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    userEmail: "",
    userName: "",
    userMsg: "",
  });
  const [showInput, setShowInput] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [btnState, setBtnState] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);
  const inputRef = useRef();
  const formRef = useRef();

  const verifyEmailFormat = (state) => {
    setValidEmail(state);
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowInput("showInput");
        } else setShowInput("");
      });
    });
    observer.observe(inputRef.current);
  });

  const handleChange = (type, e) => {
    setUserInput({ ...userInput, [type]: e.target.value });
    setBtnState(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmptyInput(true);
    // const keysObj = {
    //   serviceId: "service_uazmx8a",
    //   templateId: "template_ml59d7n",
    //   publicKeyId: "QejyXMSuUHyU5JiSA",
    //   templateParams: {
    //     from_name: userInput.userName,
    //     from_email: userInput.userEmail,
    //     to_name: "kevin frankle J",
    //     message: userInput.userMsg,
    //   },
    // };
    if (userInput.userEmail && userInput.userName && userInput.userMsg) {
      validEmail
        ? console.log(userInput, "all-data-entered")
        : //   ? emailjs
          //       .send(
          //         keysObj.serviceId,
          //         keysObj.templateId,
          //         keysObj.templateParams,
          //         keysObj.publicKeyId
          //       )
          //       .then((response) => {
          //         console.log(response, "mail res", userInput.userMsg);
          //         setUserInput({ userEmail: "", userName: "", userMsg: "" });
          //         setBtnState(true);
          //         setEmptyInput(false);
          //       })
          //       .catch((e) => {
          //         console.log(e, "err");
          //         setBtnState(false);
          //       })
          console.log("email format error");
    } else console.log(userInput, "with missing fields");
  };

  return (
    <>
      <div className="ContactHeader">
        <h1></h1>
        <h1
          style={{ fontWeight: "100", color: "#A5ACB9", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          X
        </h1>
      </div>
      <div className="contactContainer">
        <div style={{ marginLeft: "55px" }}>
          <img src={hero} alt="hero" style={{ maxWidth: "80%" }} />
        </div>
        <div className={`formDiv ${showInput}`} ref={inputRef}>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="textStyleProperties contactPage">
                Email*
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email"
                name="user_email"
                value={userInput?.userEmail}
                onChange={(e) => handleChange("userEmail", e)}
                style={
                  userInput?.userEmail && !validEmail
                    ? { borderColor: "red" }
                    : null
                }
              />
              {userInput?.userEmail ? (
                <EmailValidation
                  props={userInput?.userEmail}
                  verify={verifyEmailFormat}
                />
              ) : null}
              <Form.Label className="textStyleProperties contactPage">
                Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                name="user_name"
                value={userInput?.userName}
                onChange={(e) => handleChange("userName", e)}
                style={
                  emptyInput && userInput?.userName == ""
                    ? { borderColor: "red" }
                    : null
                }
              />

              <Form.Label className="textStyleProperties contactPage">
                Message
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                placeholder="Write your message here..."
                style={
                  emptyInput && userInput?.userName == ""
                    ? { borderColor: "red", height: "130px" }
                    : { height: "130px" }
                }
                value={userInput?.userMsg}
                onChange={(e) => handleChange("userMsg", e)}
              />
              <br />
            </Form.Group>
            <input
              type="submit"
              value={btnState ? "sent" : "send Email"}
              className="button contactPageBtn"
            />
          </Form>
          {/* <button className="button contactPageBtn" onClick={handleSubmit}>
            Send Email
          </button> */}
        </div>
      </div>
    </>
  );
};
export default Contact;
