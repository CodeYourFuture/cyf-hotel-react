import React from "react";
import Heading from "../general/Heading";
import Bookings from "../general/Bookings";
import TouristInfoCards from "../general/TouristInfoCards/TouristInfoCards";
import "../../css/app.css";
import "../../css/heading.css";
import Restaurant from "../general/Restaurant";

const Homepage = () => {
  return (
    <>
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
    </>
  );
};

export default Homepage;
