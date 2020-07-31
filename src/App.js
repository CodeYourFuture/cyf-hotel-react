import React from "react";

import Bookings from "./Bookings";
import "./App.css";

const Heading = () => {
  return (
    <header className="App-header">
      CYF Hotel
      <img
        className="App-logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="logo"
      />
    </header>
  );
};

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
    </div>
  );
};

const TouristInfoCards = () => {
  return (
    <div className="all_cards">
      <div className="card">
        <img
          src="https://static.tildacdn.com/tild6336-3234-4165-b561-393537373137/Glasgow.jpg"
          className="card-img-top"
          alt="Glasgow's view"
        />
        <div className="card-body">
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go to Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://omghcontent.affino.com/AcuCustom/Sitename/DAM/107/GREATER-MANCHESTER-MIN__thumb.jpg"
          className="card-img-top"
          alt="Manchester's view"
        />
        <div className="card-body">
          <a href="visitmanchester.com" className="btn btn-primary">
            Go to Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.bmeia.gv.at/fileadmin/_processed_/8/b/csm_palace-of-westminster_pixabay_bf7e9ec0a0.jpg"
          className="card-img-top"
          alt="London's view"
        />
        <div className="card-body">
          <a href="visitlondon.com" className="btn btn-primary">
            Go to London
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
