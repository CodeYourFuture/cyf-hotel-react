import React from "react";
import Bookings from "./Bookings";
import "./App.css";

const Heading = () => (
  <header className="App-header">
    <img
      className="App-logo-image"
      src="https://image.flaticon.com/icons/svg/139/139899.svg"
      alt=""
    />
    CYF Hotel
  </header>
);
var TouristCardsLinksAndImages = [
  {
    CityName: "Glasgow",
    Link: "https://peoplemakeglasgow.com/",
    Photo: "https://peoplemakeglasgow.com/templates/people/images/logo.png"
  },
  {
    CityName: "Manchester",
    Link: "https://www.visitmanchester.com/",
    Photo: "https://www.visitmanchester.com/dbimgs/logo(4).png"
  },
  {
    CityName: "London",
    Link: "https://www.visitlondon.com/",
    Photo: "https://cdn.londonandpartners.com/fl/assets/33374-310x174.jpg"
  }
];
const TouristInfoCards = props => {
  return (
    <div className="Card-Container">
      {props.cardContent.map(city => (
        <div className="card">
          <img src={city.Photo} alt=" " className="card-img-top" />
          <div className="card-body">
            {city.CityName}
            <br />
            <a href={city.Link} className="btn btn-primary">
              Go {city.CityName}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
var FooterContentArray = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const Footer = props => (
  <ul>
    {props.footerContent.map(item => (
      <li>{item}</li>
    ))}
  </ul>
);

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cardContent={TouristCardsLinksAndImages} />
      <Bookings />
      <Footer footerContent={FooterContentArray} />
    </div>
  );
};

export default App;
