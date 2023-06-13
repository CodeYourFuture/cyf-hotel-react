import React from "react";
import Bookings from "./Bookings";
import SearchResults from "./SearchResults";

import "./App.css";

const Heading = () => (
  <div className="App-header">
    <img src="./5-stars.png" className="Logo-header" />
    <header>CYF Hotel</header>
  </div>
);

const TouristInfoCards = (props) => (
  <div className="card">
    <img src={props.image} className="card-img-top" />
    <h3>{props.name}</h3>
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Ut congue volutpat erat. Suspendisse nec vestibulum
      risus, at sollicitudin lectus. Sed rhoncus odio ac magna ultrices, in
      consectetur tortor convallis. Sed sed dui ante. Etiam efficitur lacus
      velit, eget placerat massa rutrum ut. Integer posuere elit eget imperdiet
      molestie.
    </p>
    <div className="card-body">
      <a
        href={props.url}
        className="btn btn-primary"
      >
        More information
      </a>
    </div>
  </div>
);

const Footer = (props) => (
  <ul>
    {props.text.map(item => <li key={item}>{item}</li>)}
  </ul>
)

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="InfoCards">
        <TouristInfoCards
          name="Glasgow"
          image="./university-of-glasgow.jpg"
          url="https://peoplemakeglasgow.com/"
        />
        <TouristInfoCards
          name="Manchester"
          image="./manchester.webp"
          url="https://visitmanchester.com"
        />
        <TouristInfoCards
          name="London"
          image="./london.webp"
          url="https://visitlondon.com"
        />
      </div>

      <Bookings />
      <Footer text={["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]} />
    </div>
  );
};

export default App;
