import React from "react";
import Header from "./Header";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import "./App.css";

// Compile and return all components on the DOM
const App = () => {
  // Address Array
  const Address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Header />
      <Bookings />
      <Restaurant />
      <Footer Address={Address} />
    </div>
  );
};

export default App;
