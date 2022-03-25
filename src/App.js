import React from "react";

import Header from "./Header";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Bookings />
      <TouristInfoCards />
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
