import SearchResults from './SearchResults';
import  Footer from './Footer';
import TouristInfoCards  from './TouristInfoCards';
import  Heading  from './Heading';
import React from "react";

import Bookings from "./Bookings";
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <Heading     />
      <Bookings />
      
      <TouristInfoCards     />
      <Footer     />
    </div>
  );
};

export default App;
