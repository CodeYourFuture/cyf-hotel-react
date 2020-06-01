import React from "react";
import Heading from "./components/Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import "./App.css";
import Restaurant from "./Restaurant";
const info = [
  "Address: 123 Fake Street, London, E1 4UD",
  "Email: hello@fakehotel.com",
  "Telephone Number: 0123 456789"
];
const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer arrayInfo={info} />
    </div>
  );
};

export default App;
