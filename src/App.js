import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  let footerInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      {/* <header className="App-header">CYF Hotel</header> */}
      <TouristInfoCards />
      <Bookings />
      <Footer array={footerInfo} />
    </div>
  );
};

export default App;
