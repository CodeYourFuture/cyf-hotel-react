import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import "./App.css";

const App = () => {
  let info =["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer info={info} name="Sana"/>

    </div>
  );
};

export default App;
