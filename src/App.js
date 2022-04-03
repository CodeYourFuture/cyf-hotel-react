import React from "react";
import Header from "./heading";

import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./cards";
import Footer from "./footer";
import Restaurant from "./Restaurant";
// import Order from "./Order";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />

      <Bookings />
      <Restaurant />
      <Footer
        contactDetail={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
