import React from "react";
import "./App.css";
import Heading from "./Components/Heading";
import ListCards from "./Components/ListCards";
import Bookings from "./Components/Bookings";
import Restaurant from "./Components/Restaurant";
import Footer from "./Components/Footer";

const App = () => {
  const footerData = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Heading logoName={"CYF Hotel Alex"} />
      <ListCards />
      <Bookings />
      <Restaurant />
      <Footer data={footerData} />
    </div>
  );
};

export default App;
