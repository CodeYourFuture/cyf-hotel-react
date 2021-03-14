import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import "./App.css";

/* const Heading = () => (
  <div className="Header">
    <img className="App-logo" src="https://image.flaticon.com/icons/svg/139/139899.svg" alt="logo"/>
    <header className="App-header">CYF Hotel</header>
  </div>
); */

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          className="card-img-top"
          src="https://s0.geograph.org.uk/geophotos/05/91/02/5910275_02d04e4a.jpg"
          alt="Glasgow"
        />
        <div className="card-body">
          <a className="btn btn-primary" href="https://peoplemakeglasgow.com">
            Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          className="card-img-top"
          src="https://static.amazon.jobs/locations/118/thumbnails/Manchester_-_Thumbnail.jpg?1456767226"
          alt=""
        />
        <div className="card-body">
          <a className="btn btn-primary" href="https://visitmanchester.com">
            Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          className="card-img-top"
          src="https://live.staticflickr.com/3653/3499471010_a80f94ae33_b.jpg"
          alt=""
        />
        <div className="card-body">
          <a className="btn btn-primary" href="https://visitlondon.com">
            London
          </a>
        </div>
      </div>
    </div>
  );
};

const Footer = props => {
  return (
    <div>
      <ul>
        {props.footer.map(fake => (
          <li>{fake}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer
        footer={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
