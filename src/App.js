import React from "react";
import Cities from "./data/cities.json";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  const footerInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <div className="album py-5">
        <div className="container">
          <div className="row">
            <TouristInfoCards cities={Cities} />
          </div>
        </div>
      </div>
      <Bookings />
      <Footer info={footerInfo} />
    </div>
  );
};

export default App;
