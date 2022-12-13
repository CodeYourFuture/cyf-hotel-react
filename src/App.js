import React from "react";
import Header from "./Header";
import Bookings from "./Bookings";
import ToursitInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const footerInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Header />
      <ToursitInfoCards />
      <Bookings />
      <Restaurant />
      <Footer footerInfo={footerInfo} />
    </div>
  );
};

export default App;
