import React from "react";
import Heading from "./Heading";
import TuristInfoCards from "./TuristInfoCards";
import Bookings from "./Bookings";
import "./App.css";
import london from  "./images/london.jpeg"
import manchester from "./images/Manchester.webp"
import glasgow from "./images/glasgow.jpeg"
import Footer from "./Footer";

const App = () => {
  const contacts = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]; //declaring the data inside app for easy access

  return (
    <div className="App">
      <Heading/>
      <div className="infoCards">
      <TuristInfoCards 
      image={glasgow} 
      header={"Glasgow"}
      text={"Pushing the boundaries of art and culture, tunes that rock the city, varied shopping and a heart that beats through its people, what’s not to love about Glasgow?"} 
      a={"https://peoplemakeglasgow.com"} 
      />
      <TuristInfoCards 
      image={london} 
      header={"London"}
      text={"An unmissable destination for travellers, London is a melting pot of history, culture, green spaces and an international crowd that spills into every delicious corner of its cuisine. "} 
      a={"https://visitlondon.com"} 
      />
      <TuristInfoCards 
      image={manchester} 
      header={"Manchester"}
      text={"Home to world-famous football, renowned art galleries and a music scene that brought Oasis to centre stage – there’s lots to love about Manchester. There’s a wealth of treasures waiting to be discovered."} 
      a={"https://visitmanchester.com"}  />
      </div>
      <Bookings />
      <Footer props={contacts} /> 

    </div>
  );
};

export default App;



