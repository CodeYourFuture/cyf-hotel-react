import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./components/Heading.js";
import TouristInfoCards from "./components/TouristInfoCards.js";
import Footer from "./components/footer.js";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
