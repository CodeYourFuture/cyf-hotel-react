import React from "react";
import Heading from "./Components/Heading";
import Bookings from "./Components/Bookings";
import Footer from "./Components/Footer";
import london from "./images/london.jpeg";
import glasgow from "./images/glasgow.jpeg";
import manchester from "./images/manchester.jpeg";
import TouristInfoCards from "./Components/TouristInfoCards";
import SearchResults from "./Components/SearchResults";
import Restaurant from "./Restaurant"

import "./App.css";

const App = () => {

  const address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];

  return (
    <div className="App">
      <Heading />
      <TouristInfoCards
        image={glasgow}
        title="Glasgow"
        text=
          "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, Today it's a national cultural hub, home to institutions including the Scottish Opera, Scottish Ballet and National Theatre of Scotland"
        
        link="peoplemakeglasgow.com"
      />

      <TouristInfoCards
        image={london}
        title="London"
        text=
          "London, At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city"
        
        link="visitlondon.com"
      />
      <TouristInfoCards
        image={manchester}
        title="Manchester"
        text=
          "Youthful, diverse, energetic and bursting with character; Manchester is one of the most exciting places to visit in the UK right now, Manchester city centre is jam-packed with unique and eclectic restaurants, shops, museums, galleries and hotels"
        
        link="visitmanchester.com"
      />
      <Bookings />
      <Restaurant />
      <Footer 
      
        address = {address}
      />
    </div>
  );
};

export default App;
