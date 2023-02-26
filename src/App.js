import React from "react";
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
        />
        <TouristInfoCards
          image={GlasgowImage}
          name="Glasgow"
          link="http://peoplemakeglasgow.com/"
        />
        <TouristInfoCards
          image={ManchesterImage}
          name="Manchester"
          link="https://www.visitmanchester.com/"
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
