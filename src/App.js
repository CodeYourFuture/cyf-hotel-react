import React from "react";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  let footerEls = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <SearchResults />
      <Footer footerEls={footerEls} />
    </div>
  );
};

const SearchResults = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>title</td>
          <td>first name</td>
          <td>sure name</td>
          <td>email</td>
          <td>room id</td>
          <td>check in date</td>
          <td>check out date</td>
        </tr>
      </thead>
      <tbody />
    </table>
  );
};

const Footer = props => {
  return (
    <ul>
      {props.footerEls.map((el, index) => {
        return <li key={index}>{el}</li>;
      })}
    </ul>
  );
};

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <div className="card">
        <img
          className="card-img-top"
          src="https://www.shoosmiths.co.uk/-/media/images/locations/glasgow.jpg"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            peoplemakeglasgow.com
          </a>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://downtowninbusiness.com/wp-content/uploads/2018/05/Manchester-a-young-city.jpg"
        />
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            visitmanchester.com
          </a>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
        />
        <div className="card-body">
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            visitlondon.com
          </a>
        </div>
      </div>
    </div>
  );
};

const Heading = () => {
  return (
    <div>
      <img
        className="logo-hotel"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="This is the hotel logo"
      />
      <header className="App-header">CYF Hotel</header>
    </div>
  );
};

export default App;
