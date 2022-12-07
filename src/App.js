import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./component/Heading";
import TouristInfoCards from "./component/TouristInfoCards";
import Footer from "./component/Footer";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      {/* <SearchResult/> */}
      <Footer />
    </div>
  );
};

export default App;
