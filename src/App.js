import "./App.css";
import React from "react";
import Header from "./Header";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

// This exercise was a collaborative effort between christina-mifsud and munozirianni1988

const App = () => {
  return (
    <div className="App">
      <>
        <Header />
        <Bookings />
        <Restaurant />
        <TouristInfoCards />
        <Footer />
      </>
    </div>
  );
};

export default App;
