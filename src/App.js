import React from "react";
import Heading from "./Heading.js";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";
import Restaurant from "./Restaurant.js";
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
