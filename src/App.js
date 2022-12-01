import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";
import arrayOfHotels from "./dataRequiredByTouristInfoCards.json";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  const myFooter = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  // const ourHotels = arrayOfHotels.map(hotel => {
  //   return (
  //     <TouristInfoCards hotelProp={hotel} />
  //   );})

  return (
    <div className="App">
      <Heading />
      <TouristInfoCards hotelsProp={arrayOfHotels} />
      <Bookings />
      <Restaurant />
      <Footer appFooter={myFooter} />
    </div>
  );
};

export default App;
