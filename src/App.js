import React from "react";
import Heading from "./Heading.js";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards.js";
import SearchResults from "./SearchResults.js";
const cities = [
  {
    name: "Glasgow",
    href: "https://peoplemakeglasgow.com",
    image:
      "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/glasgow-scotland/overview/glasgow-scotland-aerial-view.jpg?$750x320$"
  },
  {
    name: "Glasgow",
    href: "https://peoplemakeglasgow.com",
    image:
      "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/glasgow-scotland/overview/glasgow-scotland-aerial-view.jpg?$750x320$"
  },
  {
    name: "Glasgow",
    href: "https://peoplemakeglasgow.com",
    image:
      "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/glasgow-scotland/overview/glasgow-scotland-aerial-view.jpg?$750x320$"
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
      <Bookings />
      <TouristInfoCards cities={cities} />
      <SearchResults />
      <Footer contactInfo={contactInfo} />
    </div>
  );
};

export default App;
