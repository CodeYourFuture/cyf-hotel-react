import React from "react";

import Bookings from "./Bookings";
import Heading from "../src/Heading.js";
import TouristInfoCards from "../src/TouristInfoCards";
import Footer from "../src/Footer.js";
import "./App.css";

const cities = [
  {
    name: "London",
    link: "https://visitlondon.com/",
    image:
      "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/lastminutelondoneye640x360.jpg?mw=640&hash=369C7DBB3A75160763BFD8572303D124F316A65C"
  },
  {
    name: "Glasgow",
    link: "https://peoplemakeglasgow.com/",
    image:
      "https://s19623.pcdn.co/wp-content/uploads/2015/10/A-weekend-in-Glasgow-48-hour-itinerary.jpg"
  },
  {
    name: "Manchester",
    link: "https://www.visitmanchester.com/",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3d/31/60/manchester-town-hall.jpg?w=1000&h=600&s=1"
  }
];

const footerInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      {cities.map(city => {
        return <TouristInfoCards city={city} />; // passing whole object for each city
      })}
      <Bookings />
      <Footer elements={footerInfo} />
    </div>
  );
};

export default App;
