import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Bookings />
    </div>
  );
};

export default App;
