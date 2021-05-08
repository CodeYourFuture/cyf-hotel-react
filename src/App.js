import React from "react";
import Heading from "./Heading";
import Cities from "./Cities";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cities={Cities} />
      <Bookings />
      <Restaurant />
      <Footer
        address={[
          "1965, Bay Lake, London, United Kingdom",
          "hello@cyfhotel.com",
          "+44 075 339 70813"
        ]}
      />
    </div>
  );
};

export default App;
