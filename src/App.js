import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards link="https://peoplemakeglasgow.com" name="Glasgow" />
      <TouristInfoCards link="https://visitmanchester.com" name="Manchester" />
      <TouristInfoCards link="https://visitlondon.com" name="London" />
      <Bookings />
    </div>
  );
};

export default App;

{
  /* <TouristInfoCards link="visitmanchester.com" />
  <TouristInfoCards link="visitlondon.com"  */
}
