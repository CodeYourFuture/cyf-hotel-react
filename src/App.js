import React from "react";
import Header from "./Header";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Locationinfo from "./data/locationinfo.json";
import "./App.css";
import Restaurant from "./Restaurant";

const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const name = " CYF hotel";

const App = () => {
  return (
    <div className="App">
      <Header name={name} />
      <TouristInfoCards data={Locationinfo} />
      <Bookings />
      <Restaurant />
      <Footer address={address} />
    </div>
  );
};

export default App;
