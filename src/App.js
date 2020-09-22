import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Header from "./Header";

import Footer from "./Footer";
import CardsSection from "./CardsSection";

const App = () => {
  return (
    <div className="App">
      <Header />
      <CardsSection />
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
