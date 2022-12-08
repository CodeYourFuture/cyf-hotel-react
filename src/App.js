import React from "react";
import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Restaurant from "./components/Restaurant";
import Footer from "./components/Footer";
import "./App.css";
import NewBookingForm from "./components/NewBookingForm";

const contactInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <NewBookingForm />
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer contactInfo={contactInfo} />
    </div>
  );
};

export default App;
