import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer
        Address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
