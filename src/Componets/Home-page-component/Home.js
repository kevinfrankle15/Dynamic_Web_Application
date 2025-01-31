import React from "react";
import Header from "./Header";
import LandingPageContent1 from "./LandingPageContentOne";
import Modules from "../Modules";
import VerticalLinearStepper from "../Roadmap";

const Home = () => {
  return (
    <>
      <Header />
      <LandingPageContent1 />
      <br />
      <br />
      <br />
      <Modules />
      <br />
      <br />
      <br />
      <VerticalLinearStepper />
    </>
  );
};
export default Home;
