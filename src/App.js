import React from "react";
import Header from "./components/Header/Heading";
import Bookings from "./components/Booking/Bookings";
import Footer from "./components/Footer/Footer";
import TouristInfoCards from "./components/TouristInfoCard/TouristInfoCards";
import Restaurant from "./components/Resturant/Restaurant";
import classes from "./App.module.css";

const App = () => {
  const footerContents = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  return (
    <div className={classes.App}>
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer contents={footerContents} />
    </div>
  );
};

export default App;
