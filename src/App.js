import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";


const App = () => {
  const contact = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      
      <Footer contact={contact} />
    </div>
  );
};



const Footer = (props) => {
  return (
    <ul className="contact-container">
      {props.contact.map((list, index) => {
        return <li key={index}>{list}</li>;
      })}
    </ul>
  );
};



export default App;
