import React, { useEffect } from "react";
import "../Styles/profile.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import AxiosInstance from "../Axios/Axios.js";
const ProfilePage = () => {
  const getUserInstance = async () => {
    var userId = await JSON.parse(localStorage.getItem("registered-user"));
    await AxiosInstance.get(`/view-users/${userId?.userId}/`)
      .then((response) => {
        console.log(response?.data, "profile-page ");
      })
      .catch((err) => {
        console.log(err);
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
              {/* <Form.Label>Company Name</Form.Label> */}
              <Form.Control placeholder="Company Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Name">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group as={Col} controlId="Confirm Password">
              {/* <Form.Label>Confirm Password</Form.Label> */}
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
          </Row>

          <div>
            <Button variant="secondary" type="submit">
              Edit
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default ProfilePage;
