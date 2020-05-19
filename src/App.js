import React from "react";
// I started now
import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      {/* <TouristInfoCards /> */}
      <Bookings />
    </div>
  );
};

const Heading = () => {
  return (
    <div id="Heading">
      <header className="App-header">
        <img
          style={{ width: "150px", height: "180px" }}
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
        />
      </header>
    </div>
  );
};
const TouristInfoCards = () => {
  return (
    <div className="card">
      {/* <img src="..." className="card-img-top" /> */}
      <div className="card-body">
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default App;
