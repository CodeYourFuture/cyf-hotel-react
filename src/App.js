import React from "react";
import Footer from "./footer";
import Bookings from "./Bookings";
import "./App.css";

const contactDetails = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings />
      <Footer contact={contactDetails} />
    </div>
  );
};

export default App;
