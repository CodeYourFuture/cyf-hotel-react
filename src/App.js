import React from "react";

import Bookings from "./components/Bookings";
import "./App.css";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import touristInfo from "./components/touristInfo";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import Restaurant from "./components/Restaurant";

//Created Tourist Card
const CreateTouristCard = city => {
  return <TouristInfoCards Key={city.id} image={city.image} link={city.url} />;
};

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <Restaurant />
      <SearchResults />
      {touristInfo.map(CreateTouristCard)}
      <Footer />
    </div>
  );
};

export default App;

console.log();
