import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./component/Heading";
import TouristInfoCards from "./component/TouristInfoCards";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <TouristInfoCards />
      <Bookings />
      {/* <SearchResult/> */}
      <Footer />
    </div>
  );
};

export default App;
