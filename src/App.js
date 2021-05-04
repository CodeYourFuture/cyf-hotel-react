import React from "react";
import Restaurant from "./Restaurant";
import Bookings from "./Bookings";
//import AddBookings from "./AddBookings";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

const Footer = props => {
  return (
    <ul className="footer">
      {props.address.map((place, index) => {
        return <li key={index}>{place}</li>;
      })}
    </ul>
  );
};

const TouristInfoCards = () => {
  return (
    <div className="all_cards">
      <div className="card">
        <img
          src="https://i2-prod.glasgowlive.co.uk/incoming/article15793259.ece/ALTERNATES/s810/1_City-Chambers-George-Sq-Glasgow-Scotland.jpg"
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

export default App;
