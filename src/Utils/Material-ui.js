import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
export const Alertt = ({ prop }) => {
  const [hide, setHide] = useState(false);
  console.log(prop, "message");
  let { code, message } = prop;
  const severity = {
    200: "success",
    info: "info",
    warning: "warning",
    400: "error",
  };
  console.log(prop, "message");
  return (
    <>
      <Stack
        sx={{ width: "100%", zIndex: "1001 !important" }}
        spacing={2}
        style={!hide ? { display: "block" } : { display: "none" }}
      >
        <Alert
          severity={severity[code]}
          onClose={() => {
            setHide(true);
          }}
        >
          {message}
        </Alert>
      </Stack>
    </>
  );
};
