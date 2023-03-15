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
          description="The south-West bubbly 'Capital City' of England. Vibrant and diverse, London is a hotpot of melting cultures and personalities, with a rich cool vibe."
        />

        <TouristInfoCards
          image={GlasgowImage}
          name="Glasgow"
          link="http://peoplemakeglasgow.com/"
          description="The Capital city of Scotland, Glasgow is rich in history and culture. A vibrant and welcoming city with a colourful atmosphere. Visit the cathedral for authenthic feel Glasgow."
        />
        <TouristInfoCards
          image={ManchesterImage}
          name="Manchester"
          link="https://www.visitmanchester.com/"
          description="A lovely vibrant city in the north part of England. It is rich in both traditional and futuristic cultures, with a medley of its old history seeping through."
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
