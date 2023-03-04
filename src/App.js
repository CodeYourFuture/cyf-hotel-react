import React, { useState } from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
// import SearchResults from "./SearchResults";
import Footer from "./Footer";
import LondonImage from "./images-folder/london-tourist-image.jpeg";
import ManchesterImage from "./images-folder/manchester.jpeg";
import GlasgowImage from "./images-folder/visit-glasgow.jpeg";
import Restaurant from "./Restaurant";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="infocards">
        <TouristInfoCards
          image={LondonImage}
          name="London"
          link="https://www.visitlondon.com/"
          description="mmmoo bhhff jmjhghjkk"
        />

        <TouristInfoCards
          image={GlasgowImage}
          name="Glasgow"
          link="http://peoplemakeglasgow.com/"
          description="fgggtdszzzcg bhhff jmjhghjkk"
        />
        <TouristInfoCards
          image={ManchesterImage}
          name="Manchester"
          link="https://www.visitmanchester.com/"
          description="mmjjjooo hhjjikiiooioikijh bhhff jmjhghjkk"
        />
      </div>
      {/* <SearchResults/> */}
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
