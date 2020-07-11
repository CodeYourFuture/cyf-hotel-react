import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  const city1 = {
      name: "Glasgow",
      link: "http://www.peoplemakeglasgow.com/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Glasgow_new_montage%2C_2017.jpg",
      text:
        "Glasgow is the most populous city in Scotland, and the third most populous city in the United Kingdom"
    },
    city2 = {
      name: "Manchester",
      link: "https://www.visitmanchester.com/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c5/Manchester_Montage_2017.jpg",
      text:
        "Manchester is a city and metropolitan borough in Greater Manchester, England. It is historically and traditionally a part of the county of Lancashire"
    },
    city3 = {
      name: "London",
      link: "https://www.visitlondon.com/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/275px-London_Montage_L.jpg",
      text:
        "London is the capital and largest city of England and the United Kingdom"
    };
  const footerInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <div className="album py-5">
        <div className="container">
          <div className="row">
            <TouristInfoCards city={city1} />
            <TouristInfoCards city={city2} />
            <TouristInfoCards city={city3} />
          </div>
        </div>
      </div>
      <Bookings />
      <Footer info={footerInfo} />
    </div>
  );
};

export default App;
