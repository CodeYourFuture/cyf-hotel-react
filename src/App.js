import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer ";

const cities = [
  {
    city: "London",
    src:
      "https://media.istockphoto.com/id/1457896087/photo/london-big-ben-tower-westminster-bridge-over-thames-river-england-uk.jpg?b=1&s=170667a&w=0&k=20&c=rCpR7BOhOAT5DsaIK2BXg0SJ4YZtBCS29-XY3GPjeaU=",
    text:
      "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.",
    link: "https://www.visitlondon.com/"
  },
  {
    city: "glascow",
    src:
      "https://media.istockphoto.com/id/471681577/photo/bridge-over-the-clyde.jpg?b=1&s=170667a&w=0&k=20&c=AVhp13Nkj1EzmnwEUYlLMLKm1eLwOaxd0S4ROLEADO8=",
    text:
      "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding. Today it's a national cultural hub, home to institutions including the Scottish Opera, Scottish Ballet and National Theatre of Scotland, as well as acclaimed museums and a thriving music scene.",
    link: "https://peoplemakeglasgow.com/"
  },
  {
    city: "Manchester",
    src:
      "https://images.unsplash.com/photo-1638637869635-f1a90c8f7edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuY2hlc3RlciUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    text:
      "Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry.",
    link: "https://www.visitmanchester.com/"
  }
];
{
  /* Array for Footer*/
}
const footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards cities={cities} />
      <Footer footer={footer} />
    </div>
  );
};

export default App;
