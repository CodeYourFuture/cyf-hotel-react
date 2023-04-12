import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import FooterInfo from "./Footer";
import Restaurant from "./Restaurant";


import Bookings from "./Bookings";
import "./App.css";

const App = () => {
   
   const cardsInfo = [
     {
       image:
         //"https://media.istockphoto.com/id/1204443210/photo/glasgow-city-centre-skyline.jpg?b=1&s=170667a&w=0&k=20&c=_gZJGc3UVPiT2FAK1OVtvbXXxqkIwW-sM5GYwNZThxY=",
         "../images/glasgow.jpg",
       city: "Glasgow 格拉斯哥",
       description:
         "Glasgow is a port city on the River Clyde in Scotland's western Lowland. It's famed for its Victorian and art nouveau architecture...",
       buttonLink: "https://peoplemakeglasgow.com",
     },
     {
       image:
         //  "https://cdn.londonandpartners.com/visit/london-organisations/houses-of-parliament/63950-640x360-london-icons2-640.jpg",
         //"https://media.istockphoto.com/id/957174246/photo/the-big-ben-in-london-and-the-house-of-parliament.jpg?s=612x612&w=0&k=20&c=s4VLV8azLHzOPDm_K7spSmp7r771sS3IUX53dlHhaKc=",
         "https://media.istockphoto.com/id/499876608/photo/amazing-london-skyline-with-tower-bridge-during-sunset.jpg?s=612x612&w=0&k=20&c=34evgrlaua-nyQHgOWZ0knHnSls5vTNXgnoUKMmFdv0=",
       city: "London   伦 敦",
       description:
         "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching...",
       buttonLink: "https://visitlondon.com",
     },
     {
       image:
         "https://media.istockphoto.com/id/1172800529/photo/summer-in-oslo-aerial-panoramic-view.jpg?s=612x612&w=0&k=20&c=qtnawFe4XI6K61xVLKdTANUlsw3AuYnzr3kAWZrhKfg=",
       city: "Manchester曼彻斯特",
       description:
         "Manchester is a major city in the northwest of England with a rich industrial heritage...",
       buttonLink: "https://visitmanchester.com",
     },
   ];

const footerMes = ["ADD.: 100 Upper Street, London, EC1 2CN", "E-MAIL:info@towerhotel.com", "TEL:010 23456789"]


  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cards = {cardsInfo}/>
      <Bookings />
      <Restaurant />
      <FooterInfo footerMes = {footerMes}/>
    </div>
  );
};

export default App;
