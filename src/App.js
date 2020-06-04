import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant"; // imported restaurant in to app component.
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      {/* rendered the restaurant in app component   */}
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
