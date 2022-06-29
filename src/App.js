import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Admin from "./components/Admin";
import Footer from "./components/footer/Footer";

const App = () => {
  const details = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <Admin />
      <Footer details={details} />
    </div>
  );
};

export default App;
