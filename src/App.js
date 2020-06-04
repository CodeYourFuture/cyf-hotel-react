import React from "react";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings />
      <Restaurant />
      {/* <Footer hotelInfos={footerInfo} /> */}
    </div>
  );
};

export default App;
