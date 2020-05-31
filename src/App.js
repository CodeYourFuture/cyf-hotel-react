import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristicData from "./destinationInfo.json";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  const countryInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789 "
  ];

  const touristicInformation = TouristicData;

  return (
    <div className="App">
      <Heading />
      <TouristInfoCards touristicInformation={touristicInformation} />
      <Bookings />
      <Footer countryInfo={countryInfo} />
    </div>
  );
};

export default App;
