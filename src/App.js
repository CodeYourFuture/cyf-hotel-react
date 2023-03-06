import React from "react";
import Bookings from "./Bookings";
import "./App.css";

import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const infoArr = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      {/* <header className="App-header">CYF Hotel</header> */}
      <Bookings />
      <Restaurant />
      <Footer footerInfo = {infoArr} />
    </div>
  );
};

export default App;
