import React from "react";

import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";
const Heading = () => {
  return (
    <header className="App-header">
      <img src="/hotel.jpg" alt="hotel" />
      CYF Hotel
    </header>
  );
};
const Footer = props => {
  return (
    <div>
      <ul className="footer">
        {props.info.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer
        info={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
