import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading text={"CYF Hotel - Marina"} />
      <Bookings />
    </div>
  );
};

export default App;
