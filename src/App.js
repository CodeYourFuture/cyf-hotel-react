import React from "react";
import Bookings from "./Components/Bookings";
import Heading from "./Components/Heading";
import Footer from "./Components/Footer";
import "./App.css";
import ListCards from "./Components/ListCards";
import Restaurant from "./Components/Restaurant";

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
      <div className="container">
        <hr />
      </div>
      <Restaurant />
      <Footer data={footerData} />
    </div>
  );
};

export default App;
