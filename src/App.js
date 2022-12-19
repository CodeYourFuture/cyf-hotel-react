import React from "react";
import Footer from "./Footer";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Resturant from "./Restaurant";

// import SearchResults from "./SearchResults";
const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Resturant />

      <Footer />
    </div>
  );
};

export default App;
