import React, { useEffect } from "react";
import Axios from "axios";
const SignUp = () => {
  var AdminData = {
    id: 4,
    user_name: "test4",
    pass: "arun",
    dob: "2000-12-15",
    gender: "male",
    admin_role: "office_posting new",
    branch: "covai",
  };

  const reg = async () => {
    await Axios.post("http://localhost:3001/admin-register", {
      data: AdminData,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAdmins = async () => {
    await Axios.get("http://localhost:3001/get-all-admin")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAdmin = async () => {
    await Axios.delete(`http://localhost:3001/delete-admin/${4}/${"test4"}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <>
      <div style={{ textAlign: "center" }} onClick={reg}>
        SignUp page!
      </div>
      <div onClick={getAdmins}> GET ALL ADMIN</div>
      <div onClick={deleteAdmin}>delect admin</div>
    </>
  );
};
export default SignUp;
