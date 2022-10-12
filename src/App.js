import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";
import { places } from "./places";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="cardsContainer">
        <TouristInfoCards
          id={places[0].id}
          name={places[0].name}
          image={places[0].image}
          link={places[0].link}
          info={places[0].info}
        />
        <TouristInfoCards
          id={places[1].id}
          name={places[1].name}
          image={places[1].image}
          link={places[1].link}
          info={places[1].info}
        />
        <TouristInfoCards
          id={places[2].id}
          name={places[2].name}
          image={places[2].image}
          link={places[2].link}
          info={places[2].info}
        />
      </div>

      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
