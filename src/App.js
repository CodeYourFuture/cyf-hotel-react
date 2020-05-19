import React from "react";
import Header from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Locationinfo from "./data/locationinfo.json";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards data={Locationinfo} />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
