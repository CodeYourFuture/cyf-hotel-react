import React from "react";
import Heading from "./Heading.js";
import TouristInfoCards from "./TouristInfoCards.js";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer.js";
import "./App.css";

const cities = [
  {
    name: "Manchester",
    website: "https://visitmanchester.com",
    image:
      "https://www.visitmanchester.com/imageresizer/?image=%2fdbimgs%2fCastlefield%20Basin(1).jpg&action=BlogDetailContent",
    description:
      "Youthful, diverse, energetic and bursting with character; Manchester is one of the most exciting places to visit in the UK right now where everybody and anybody is very warmly welcomed."
  },
  {
    name: "Glasgow",
    website: "https://peoplemakeglasgow.com",
    image:
      "https://peoplemakeglasgow.com/images/Neighbourhoods/alltogether/South2_1.jpg",
    description:
      "Explore the city's must-see sights, cultural attractions, amazing shopping, vibrant nightlife and more - make your next stop Glasgow!"
  },
  {
    name: "London",
    website: "https://visitlondon.com",
    image:
      "https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=B6672601055B38B34C592E0160B0445AA063B876",
    description:
      "Welcome to Visit London, your official city guide to London, England. Find things to do in London, days out in London, London attractions and sightseeing, what's on, London events, theatre, tours, restaurants and hotels in London. Plan your trip to London with useful traveller information"
  }
];
const footerArr = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cities={cities} />
      <Bookings />
      <Restaurant />
      <Footer footerArr={footerArr} />
    </div>
  );
};

export default App;
