import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Header from "./Header";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  const info = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]

  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Footer footerInfo={info} />
    </div>
  );
};

export default App;
