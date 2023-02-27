import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="info-cards">
      <TouristInfoCards cityName = "London" cityPic = "london.jpg" aboutCity = "London is Capital" />
      <TouristInfoCards cityName = "Manchester" cityPic = "manchester.jpg" aboutCity = "Manchester is nice"/>
      <TouristInfoCards cityName = "Glasgow" cityPic = "Glasgow.jpg" aboutCity = "Glasgow is the mosr beutiful city in the Uk"/>
     </div>
      <Bookings />
    </div>
  );
};

export default App;
