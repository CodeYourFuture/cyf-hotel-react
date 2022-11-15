import React from "react";
import CustomerList from "./com/customer";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings />
      <CustomerList />
    </div>
  );
};

export default App;
