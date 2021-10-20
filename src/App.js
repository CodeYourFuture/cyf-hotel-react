import React, { useState, useEffect } from "react";
import Header from "./Heading";
import Card from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const contactsList = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="App">
      {display ? (
        <div>
          <Header />
          <Card />
          <Bookings />
          <Restaurant />
          <Footer contacts={contactsList} />
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
};

export default App;
