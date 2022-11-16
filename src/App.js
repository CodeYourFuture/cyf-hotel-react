import React from "react";
import Header from "./Header";

import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

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
