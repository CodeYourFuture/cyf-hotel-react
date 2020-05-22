import React from "react";
import "./App.css";
import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

import SearchButton from "./SearchButton";

const cityData = [
  {
    name: "Glasgow",
    href: "https://peoplemakeglasgow.com/",
    text: "The second biggest city in Scotland",
    thumbnail:
      "https://frontline-collections.com/wp-content/uploads/2018/02/Glasgow-Debt-Collection.jpg"
  },
  {
    name: "Manchester",
    href: "https://www.visitmanchester.com/",
    text: "The second biggest city in Scotland",
    thumbnail:
      "https://governmentbusiness.co.uk/sites/default/files/william-mccue-508892-unsplash_1.jpg"
  },
  {
    name: "London",
    href: "https://www.visitlondon.com/",
    text: "The second biggest city in Scotland",
    thumbnail:
      "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
  }
];

const details = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="cards">
        {cityData.map((data, index) => {
          return <TouristInfoCards key={index} data={data} />;
        })}
      </div>
      <Bookings />
      <div className="footer footer-list">
        <Footer contactDetails={details} />
      </div>
    </div>
  );
};

export default App;
