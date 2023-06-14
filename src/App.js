import "./App.css";
import React from "react";

import Header from "./Header";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <>
        <Header />
        <Bookings />
        <TouristInfoCards />
        <Footer />
      </>
    </div>
  );
};

export default App;
