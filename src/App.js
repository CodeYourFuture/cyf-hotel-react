import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import fakeCities from "./data/fakeCities.json";
import TouristInfoCards from "./TouristInfoCards";
import Heading from "./Heading";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cities={fakeCities} />
      <Bookings />
      <Footer
        arr={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
