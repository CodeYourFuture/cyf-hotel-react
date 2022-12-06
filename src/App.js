import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./component/Heading";
import TouristInfoCards from "./component/TouristInfoCards";
import Footer from "./component/Footer";
const App = () => {
  return (
    <div className="App">
      <Heading />
      {/* <header className="App-header">CYF Hotel</header> */}
      <TouristInfoCards />
      <Bookings />

      <Footer />
    </div>
  );
};

export default App;
