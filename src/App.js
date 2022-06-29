import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Admin from "./components/Admin";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const details = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  const Test = () => {
    return (
      <div>
        hsdbjhvvbdfsbjbf vbhsbfhjvhavdbjwbd vjjkbdafvbyfeq bvbshfchdvfhbcqb
        hdvvqnavchjba
      </div>
    );
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer details={details} />
      </div>
    </BrowserRouter>
  );
};

export default App;
