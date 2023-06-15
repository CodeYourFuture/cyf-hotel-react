import React from "react";
import Heading from "./Heading";
import TouristInfoCard from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant"
import "./App.css";
import Footer from "./Footer";

const App = () => {
  const address = [
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789",
        ]
  return (<div className="App">
      <Heading />
      <TouristInfoCard />
      <Bookings />
      <Restaurant />
      <Footer props = {address} />
    </div>
  );
};

export default App;
