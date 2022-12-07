import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Lesson1/Heading";
import TouristInfoCards from "./Lesson1/TouristInfoCards";
import Footer from "./Lesson1/Footer";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
