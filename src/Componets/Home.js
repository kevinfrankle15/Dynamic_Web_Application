import React from "react";
import "../Styles/home.css";
import { increment, decrement } from "../Redux/Slicer";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const pCount = useSelector((state) => state.addProduct.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="header ">
        <p className="primary-fonts ">COMMODITY</p>
        <button className="signUpBtn ">Admin-SignUp</button>
      </div>

      <div style={{ textAlign: "center" }}>
        <h1>ADD PRODUCT</h1>
        <h3>{pCount}</h3>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
};
export default Home;
