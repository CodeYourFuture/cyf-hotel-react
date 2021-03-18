import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <TouristInfoCards />
      <Bookings />
      <Heading className="App" />
      {/* <header className="App-header">CYF Hotel</header> */}
      <Footer />
    </div>
  );
};

export default App;
