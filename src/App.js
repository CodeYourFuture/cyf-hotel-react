import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
// import SearchResults from "./SearchResults";
import Footer from "./Footer";
import LondonImage from "./images-folder/hotel.jpeg";
import ManchesterImage from "./images-folder/luxury-hotel-logo.jpeg";
import GlasgowImage from "./images-folder/hotl-images.jpeg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards image={LondonImage}  name="London" link="https://www.visitlondon.com/" />
      <TouristInfoCards image ={GlasgowImage} name="Glagow" link="http://peoplemakeglasgow.com/" />
      <TouristInfoCards image={ManchesterImage}name="Manchester" link="https://www.visitmanchester.com/"
      />
      {/* <SearchResults/> */}
      <Bookings />
      <Footer />
    </div>
  );
};



export default App;

