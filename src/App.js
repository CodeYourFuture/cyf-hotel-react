import React from "react";

// Components:
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards/TouristInfoCards";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant/Restaurant";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <br />
      <br />
      <Restaurant />
      <br />
      <br />
      <TouristInfoCards />
      <br />
      <br />
      <Footer
        footerArr={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
