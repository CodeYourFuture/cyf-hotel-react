import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <Bookings />
    </div>
  );
};

export default App;
