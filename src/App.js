import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  const cards = [
    {
      name: "Glasgow",
      description:
        "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding. ",
      link: "peoplemakeglasgow.com",
      img: "https://media.istockphoto.com/id/1424542588/photo/rainbow-over-glasgow-city-chambers-and-george-square-scotland-uk.jpg?b=1&s=170667a&w=0&k=20&c=C_suulesKPVzFflRmPjBRQa6YR60oJMAby9BLiOOqhg=",
    },
    {
      name: "Manchester",
      description:
        "Manchester was right at the heart of the Revolution, becoming the UK's leading producer of cotton and textiles.",
      link: "visitmanchester.com",
      img: "https://www.propertyreporter.co.uk/images/660x350/manchester_895-14609.jpg",
    },
    {
      name: "London",
      description:
        "What is London? London is the capital city of the United Kingdom.It is the U.K.'s largest metropolis and its economic, transportation, and cultural centre.",
      link: "visitlondon.com",
      img: "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE",
    },
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards card={cards} />
      <Bookings />
    </div>
  );
};

export default App;
