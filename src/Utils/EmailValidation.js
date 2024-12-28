import React, { useEffect, useState } from "react";

const EmailValidation = ({ props, verify }) => {
  const email = props;
  const [error, setError] = useState(null);
  useEffect(() => {
    if (email) {
      if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i.test(email)) {
        setError("email format error");
        verify(false);
      } else {
        setError(null);
        verify(true);
      }
    }
  }, [email, verify]);

  return (
    <>
      <span
        style={{
          color: "red",
          fontSize: "15px",
          fontWeight: "100",
          position: "absolute",
          right: "0px",
        }}
      >
        {error}
      </span>
    </>
  );
};
export default EmailValidation;
