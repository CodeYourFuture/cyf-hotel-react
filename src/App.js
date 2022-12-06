import React from "react";
import Heading from "./Component/Heading";
import Bookings from "./Bookings";
import "./App.css";
// import SearchButton from "./Component/SearchButton";
import TouristlnfoCards from "./Component/TouristInfoCards";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <TouristlnfoCards />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
