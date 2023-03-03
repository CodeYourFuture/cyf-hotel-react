import React from "react";
import Heading from "./Heading";
import TouristInfoCard from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import "./App.css";


const App = () => {
  const contactDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <div className='cards-container'>
          <TouristInfoCard image="Glasgow.jpeg" title="Glasgow" description="Glasgow is a port city on the River Clyde in Scotland's western
        Lowlands. It's famed for its Victorian and art nouveau architecture..." link="https://peoplemakeglasgow.com"/> 
          <TouristInfoCard image="London.jpg" title="London" description="London, the capital of England and the United Kingdom, is a
         21st-century city with history stretching..." link="https://visitlondon.com"/> 
          <TouristInfoCard image="Manchester.jpg" title="Manchester" description="Manchester is a major city in the northwest of England with 
          a rich industrial heritage..." link="https://visitmanchester.com"/>
      </div>

      <Bookings />
       <Restaurant />  
      <Footer contactDetails= {contactDetails}/>  
    </div>
  );
};

export default App;
