import React from "react";
import Heading from "./Heading.js";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";
import Restaurant from "./Restaurant.js";
import TouristInfoCards from "./TouristInfoCards.js";

const cities = [
  {
    name: "Glasgow",
    href: "https://peoplemakeglasgow.com",
    image:
      "https://lp-cms-production.imgix.net/2019-06/e8d86a035ed072df0be80000e5a5b058-kelvingrove-art-gallery-museum.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
  },
  {
    name: "Manchester",
    href: "https://www.visitmanchester.com/",
    image:
      "https://www.prolificnorth.co.uk/sites/default/files/styles/lightbox_large/public/images/news/manchester-cityscape0.jpg?itok=VjQDdTYJ"
  },
  {
    name: "London",
    href: "https://www.visitlondon.com/",
    image:
      "https://www.syracuse.edu/wp-content/uploads/london-large-image-1100x733.jpg"
  }
];
const contactInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = props => {
  return (
    <div className="App">
      <Heading />

      <TouristInfoCards cities={cities} />
      <Bookings />
      <Restaurant />
      <Footer contactInfo={contactInfo} />
    </div>
  );
};

export default App;
