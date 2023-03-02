import React from "react";
import Heading from "./Heading"
import SearchBtn from "./searchBtn";
import Search from "./Search"
import Bookings from "./Bookings";
import InfoCard from "./TouristInfoCards";
import Footer from "./footer";
import Restaurant from "./Restaurant"
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Heading />
      <InfoCard />  
      <Bookings />
      <Restaurant/>
      <SearchBtn/>
      <Footer/>
    </div>
  );
};

export default App;
