import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Search from "./Search";
import Heading from "./Heading";
import TouristCardData from "./TouristCardData";
import cities from "./data/TouristInfoCards.json";
import Footer from "./Footer";
import SearchResults from "./SearchResults";

const address = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];


const App = () => {
  return (
    <div className="App">
   <Heading />
   <Bookings />
   <TouristCardData cities={cities} />
   <Footer footer={address} />

    </div>
  );
};

export default App;
