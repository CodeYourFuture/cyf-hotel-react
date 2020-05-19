import React from "react";

import Bookings from "./Bookings";
import "./App.css";
// import SearchResults from './SearchResult';
import Footer from "./Footer";
import TouristInfoCards from "./TouristInfoCards";
import Heading from "./Heading";

const cityData = [
  {
    cityName: "Glasgow",
    imgSource:
      "https://www.shoosmiths.co.uk/-/media/images/locations/glasgow.jpg",
    cityUrl: "https://peoplemakeglasgow.com/"
  },
  {
    cityName: "Manchester",
    imgSource:
      "https://downtowninbusiness.com/wp-content/uploads/2018/05/Manchester-a-young-city.jpg",
    cityUrl: "https://www.visitmanchester.com/"
  },
  {
    cityName: "London",
    imgSource:
      "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
    cityUrl: "https://www.visitlondon.com/"
  }
];

const App = () => {
  let footerEls = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <div className="cards">
        {cityData.map((city, index) => (
          <TouristInfoCards city={city} key={index} />
        ))}
      </div>
      <Bookings />

      <Footer footerEls={footerEls} />
    </div>
  );
};

export default App;
