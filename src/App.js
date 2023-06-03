import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Header";


const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel DJMS</header> */}
      <Heading />

      <Bookings />
      
    </div>
  );
};

export default App;
