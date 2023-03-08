import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer"

import Bookings from "./Bookings";
import "./App.css";
import Restaurant from "./Restaurant";
import CustomerProfile from "./CustomerProfile";

const App = () => {
  const cardsInfo = [{image:"https://media.timeout.com/images/105400989/750/422/image.jpg", city : "Glasgow", description : 'This is a description about Glasgow', buttonLink : "https://peoplemakeglasgow.com"},
  {image:"https://cdn.citybaseapartments.com/blog/cba-media/2016-10/shutterstock_1072210547.jpg", city : "Manchester", description : 'This is a description about Manchester', buttonLink : "https://visitmanchester.com"},
  {image:"https://cdn.londonandpartners.com/visit/london-organisations/houses-of-parliament/63950-640x360-london-icons2-640.jpg", city : "London", description : 'This is a description about London', buttonLink :"https://visitlondon.com"}]
  
  const address = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];
  
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cards = {cardsInfo}/>
      <Bookings />
      <Restaurant />
      <Footer address = {address}/>
    </div>
  );
};

export default App;
