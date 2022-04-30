import React from "react";
import Heading from "./Heading";
import "./style/home.scss";

const Home = () => {
  return (
    <div className="home-content" id="home">
      <Heading />
      <div className="home-title">
        <h5>Luxury is not a place, it's an </h5>
        <h1>Experience.</h1>
      </div>
    </div>
  );
};

export default Home;
