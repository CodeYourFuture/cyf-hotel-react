import React from "react";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading/>
      <header className="App-header">CYF Hotel</header>
      <Bookings />
      <SearchBtn/>
    </div>
  );
};

export default App;
