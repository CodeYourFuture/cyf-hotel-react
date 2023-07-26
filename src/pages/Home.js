import React from "react";
import TouristInfoCards from "../components/TouristInfoCards";
import Bookings from "../components/Bookings";
import Restaurant from "../components/Restaurant";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import PlacesToVisit from "../components/PlacesToVisit";
import OrderTakeAway from "../components/OrderTakeAway";
const Home = () => {
  return (
    <div>
      <Heading />
      <TouristInfoCards />
      <PlacesToVisit />
      <Bookings />
      <OrderTakeAway />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default Home;
