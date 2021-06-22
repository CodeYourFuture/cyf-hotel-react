import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import placesToTravel from "./data/placesToTravel.json";
import Restaurant from "./Restaurant";

const footerInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer array={footerInfo} />
    </div>
  );
};

function TouristInfoCards() {
  return (
    <div className="cards-container">
      {placesToTravel.map((country, index) => (
        <div key={index}>
          <Card country={country} />
        </div>
      ))}
    </div>
  );
}

function Card({ country }) {
  return (
    <div className="card">
      <img src={country.img} className="card-img-top" alt={country.name} />
      <div className="card-body">
        <h1 className="card-title">{country.name}</h1>
        <p className="card-text">{country.desc}</p>
        <a
          href={country.link}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          More info...
        </a>
      </div>
    </div>
  );
}

const Heading = () => {
  return (
    <header className="App-header">
      <img
        className="header-image"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="Header Logo"
      />
      <h3 className="header-text">CYF Hotel</h3>
    </header>
  );
};

function Footer({ array }) {
  return (
    <div className="footer">
      <ul>
        {array.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
