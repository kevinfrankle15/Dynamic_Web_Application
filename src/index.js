import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./Utils/global.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, createTheme, colors } from "@mui/material";
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#EB6767",
    },
    secondary: {
      main: "#5EDFFF",
    },
    black: {
      main: "#504F4E",
    },
    error: {
      main: colors.red.A400,
    },
  },
});
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
