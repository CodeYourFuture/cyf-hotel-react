import React from "react";
import Bookings from "./Bookings.js";
import Restaurant from "./Restaurant.js";
import "./App.css";
import allComponents from "./Hotel.js";

const Info = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
// const tables;
const App = () => {
  return (
    <div className="App">
      <allComponents.Heading />
      <Bookings />
      <Restaurant />
      <allComponents.TouristInfoCards />
      {/* <allComponents.SearchResults/> */}
      <allComponents.Footer Info={Info} />
    </div>
  );
};

export default App;
