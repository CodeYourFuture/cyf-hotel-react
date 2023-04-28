import React from "react";
import TouristInfoCards from "../components/TouristInfoCards";
import Bookings from "../components/Bookings";
import Restaurant from "../components/Restaurant";
import Footer from "../components/Footer";

import Heading from "../components/Heading";
const Home = () => {
  return (
    <div>
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default Home;
