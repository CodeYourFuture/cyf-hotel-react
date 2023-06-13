import React from "react";
import Header from "./Heading";
import Bookings from "./Bookings";
import Footer from "./Footer";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";
import "./App.css";

const App = () => {
  const footerContents = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  return (
    <div className="App container">
      <Header className="App-header" />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer contents={footerContents} />
    </div>
  );
};

export default App;
