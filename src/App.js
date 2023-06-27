import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";
import Footer from "./Footer";
import Restaurant from "./Restaurant";


const App = () => {
  const contactDetails = [

    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      {/* <Footer contactDetails={contactDetails} /> */}
      
    </div>
  );
};
  

export default App;