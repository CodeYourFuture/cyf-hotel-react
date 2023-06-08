import React from "react";

import Header from "./Header";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <>
        <Header />
        <Bookings />
        <TouristInfoCards />
      </>
    </div>
  );
};

export default App;
