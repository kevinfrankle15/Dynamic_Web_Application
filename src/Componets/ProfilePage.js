import React, { useEffect, useState } from "react";
import "../Styles/profile.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import AxiosInstance from "../Axios/Axios.js";
import AlertComponent from "../Utils/Alert.js";
const ProfilePage = () => {
  const [getUserDetails, setGetUserDetails] = useState({
    company_name: "",
    email: "",
    mobile_number: "",
    id: "",
    name: "",
    password: "",
    confirm_password: "",
  });
  const [alert, setAlert] = useState("");
  const [editble, setEditble] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const getUserInstance = async () => {
    var userId =
      (await JSON.parse(localStorage.getItem("registered-user"))) ||
      JSON.parse(localStorage.getItem("login"));
    await AxiosInstance.get(`/view-users/${userId?.id}/`)
      .then((response) => {
        console.log(response?.data, "profile-page ");
        let { company_name, name, email, mobile_number, id } = response.data;
        setGetUserDetails((prev) => ({
          ...prev,
          company_name: company_name,
          name: name,
          email: email,
          mobile_number: mobile_number,
          id: id,
          password: mobile_number,
          confirm_password: mobile_number,
        }));
        console.log(getUserDetails, "getUserDetails");
        setAlert("info");
      })
      .catch((err) => {
        setAlert("danger");
        console.log(err.message, "err");
      });
  };
  const handleChange = (e) => {
    setGetUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const enableEdit = (e) => {
    e.preventDefault();
    setEditble(!editble);
  };

  const updatedUserData = {
    company_name: getUserDetails.company_name,
    name: getUserDetails.name,
    mobile_number: getUserDetails.mobile_number,
    email: getUserDetails.email,
    password: getUserDetails.password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getUserDetails.password !== getUserDetails.confirm_password) {
      console.log(updatedUserData, "updated user detials");
    }
    var userId =
      JSON.parse(localStorage.getItem("registered-user")) ||
      JSON.parse(localStorage.getItem("login"));
    AxiosInstance.put(`/update-user/${userId?.id}/`, updatedUserData)
      .then((response) => {
        console.log(response.data, "updated response");
        setHidePassword(false);
      })
      .catch((err) => {
        console.log(err.message, "while updating user");
        setHidePassword(true);
      });
  };

  useEffect(() => {
    getUserInstance();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Profile page</h1>
      <div className="col-md-6  container w-auto p-3">
        <span className="img-container mb-3 ">
          <img src="" alt="profile" />
        </span>
        <Form>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="Company Name">
              <Form.Control
                placeholder="Company Name"
                name="company_name"
                value={getUserDetails?.company_name}
                onChange={(e) => handleChange(e)}
                disabled={!editble}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Name">
              <Form.Control
                placeholder="Name"
                name="name"
                value={getUserDetails?.name}
                onChange={(e) => handleChange(e)}
                disabled={!editble}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={getUserDetails?.email}
                name="email"
                onChange={(e) => handleChange(e)}
                disabled={!editble}
              />
            </Form.Group>

            {hidePassword ? (
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={getUserDetails?.password}
                  onChange={(e) => handleChange(e)}
                  disabled={!editble}
                />
              </Form.Group>
            ) : null}

            {hidePassword ? (
              <Form.Group as={Col} controlId="Confirm Password">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm_password"
                  value={getUserDetails?.confirm_password}
                  onChange={(e) => handleChange(e)}
                  disabled={!editble}
                />
              </Form.Group>
            ) : null}
          </Row>

          <div className="mb-3">
            <Button
              variant="secondary"
              type="submit"
              onClick={(e) => enableEdit(e)}
              disabled={false}
            >
              Edit
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={!editble}
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          </div>
          {getUserDetails?.id ? (
            <AlertComponent
              type={alert}
              msg={"You Can Update your Profile here "}
            />
          ) : (
            <AlertComponent type={alert} msg={"Network Error"} />
          )}
        </Form>
      </div>
    </div>
  );
};
export default ProfilePage;
