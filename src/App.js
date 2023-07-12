import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant"
import Bookings2 from "./Bookings2";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];

  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <TouristInfoCards/>
      <div>
      <h1>Hotel Management System</h1>
      <Bookings />
      <Restaurant />
    </div><Bookings2 />
      <Footer address={address}/>
    </div>
  );
};

export default App;
