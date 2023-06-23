import React, { useState } from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Header";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  const [count, setCount] = useState(0);
  if (count > 0) {
    return <Bookings setCount={setCount} />;
  }
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings setCount={setCount} />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
