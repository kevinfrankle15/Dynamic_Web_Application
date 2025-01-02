import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const AlertComponent = ({ type, msg }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={type} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{msg}</Alert.Heading>
      </Alert>
    );
  }
};

export default AlertComponent;
