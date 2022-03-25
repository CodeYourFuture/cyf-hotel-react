import React from "react";
import Heading from "./Heading.js";
import TouristInfoCards from "./TouristInfoCards.js";
import Bookings from "./Bookings.js";
import Footer from "./Footer.js";
import SearchResults from "./SearchResults.js";
import "./App.css";

const cities = [
  {
    name: "London",
    image:
      "https://www.fodors.com/assets/destinations/2869/tower-bridge-london-england_980x650.jpg",
    website: "visitlondon.com",
    summary:
      "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city."
  },
  {
    name: "Manchester",
    image:
      "https://media.istockphoto.com/photos/view-of-a-footbridge-in-salford-quays-in-manchester-england-picture-id1061647528?k=20&m=1061647528&s=612x612&w=0&h=qhl2vXJ4vsCF10NHu8nRs6hU_LUUB3eYFynEgN8zfx8=",
    website: "visitmanchester.com",
    summary:
      "Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry. The revitalised Salford Quays dockyards now house the Daniel Libeskind-designed Imperial War Museum North and the Lowry cultural centre."
  },
  {
    name: "Glasgow",
    image:
      "https://static.standard.co.uk/2021/10/26/10/2BD1M59-1.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
    website: "peoplemakeglasgow.com",
    summary:
      "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding. Today it's a national cultural hub, home to institutions including the Scottish Opera, Scottish Ballet and National Theatre of Scotland, as well as acclaimed museums and a thriving music scene."
  }
];

const App = () => {
  const footerDetail = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards citiesName={cities} />
      <Bookings />
      <Footer footers={footerDetail} />
    </div>
  );
};

export default App;
