import React from "react";
import Header from "./components/header";
import Bookings from "./Bookings";
import TouristInfoCards from "./components/TuristInfoCards";
import Footer from "./components/footer";
import Restaurant from "./Restaurant";
import "./App.css";
const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer props={address} />
    </div>
  );
};

export default App;
