import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import InfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <div className="img-header">
          <p className="header-p">cyf hotel</p>
        </div>
      </header>
      <Heading />
      <InfoCards />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
