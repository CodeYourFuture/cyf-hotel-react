import React from "react";
import Heading from "../general/Heading";
import Bookings from "../general/Bookings";
import TouristInfoCards from "../general/TouristInfoCards/TouristInfoCards";
import "../../css/app.css";
import "../../css/heading.css";

const Homepage = () => {
  return (
    <>
      <Heading />
      <TouristInfoCards />
      <Bookings />
    </>
  );
};

export default Homepage;
