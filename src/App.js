import React from "react";
import ReactDOM from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import Search from "./Search";
import SearchButton from "./SearchButton";
import TouristInfoCards from "./TouristInfoCards";

import "./App.css";

const App = () => {
  const url = [
    "peoplemakeglasgow.com",
    "visitmanchester.com",
    "visitlondon.com"
  ];
  return (
    <div>
      <Heading />
      <Bookings />
      {/* <Search /> */}

      <TouristInfoCards />
    </div>
    // <div className="App">
    //   <header className="App-header">CYF Hotel</header>
    //   <Bookings />
    // </div>
  );
};

export default App;
