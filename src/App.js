import React from "react";

import "./App.css";
import Bookings from "./Bookings";
import Heading from "./Components/Heading";
import TouristInfoCards from "./Components/TouristInfoCards";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div id="whole-page">
        <TouristInfoCards />
        <Bookings />
        <div id="footer" className="App-footer">
          <Footer
            location={[
              "123 Fake Street, London, E1 4UD",
              "hello@fakehotel.com",
              "0123 456789"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
