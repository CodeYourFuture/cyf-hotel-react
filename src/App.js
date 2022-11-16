import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";

const infoCard = [
  {
    cityName: "Glasgow",
    info:
      "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture,a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding. Today it's a national cultural hub, home to institutions including the Scottish Opera, Scottish Ballet and National Theatre of Scotland, as well as acclaimed museums and a thriving music scene",
    imgUrl: "https://tinyurl.com/yzx8nd97",
    moreInfo: "https://peoplemakeglasgow.com/"
  },
  {
    cityName: "Manchester",
    info:
      "Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry. The revitalised Salford Quays dockyards now house the Daniel Libeskind-designed Imperial War Museum North and the Lowry cultural centre.",
    imgUrl: "https://tinyurl.com/4ke4ubfe",
    moreInfo: "https://www.visitmanchester.com/"
  },
  {
    cityName: "London",
    info:
      "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city",
    imgUrl: "https://tinyurl.com/2me5c8rz",
    moreInfo: "https://www.visitlondon.com/"
  }
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div>
        <TouristInfoCards infoCard={infoCard} />
      </div>
      <Bookings />
      <Footer
        address={[
          " Address- 123 Fake Street, London, E1 4UD",
          " E-mail-hello@fakehotel.com",
          " Tel- 0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
