import React from "react";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import Heading from "./Heading";
import InfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const cards = [
  {
    image:
      "https://lp-cms-production.imgix.net/2019-06/GettyImages-114206339_full.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=520&w=1312",
    cityName: "Glasgow",
    summary:
      "Glasgow is a port city on the River Clyde in Scotland's western Lowlands.",
    link: "https://peoplemakeglasgow.com/"
  },
  {
    image:
      "https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/manchester_town_hall_ve13463_1200x600_0_1_0_0.jpg",
    cityName: "Manchester",
    summary:
      "Manchester is a major city in the northwest of England with a rich industrial heritage.",
    link: "https://www.visitmanchester.com/"
  },
  {
    image:
      "https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz",
    cityName: "London",
    summary:
      "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.",
    link: "https://visitlondon.com/"
  }
];

const footerData = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <InfoCards cards={cards} />
      <Bookings />
      <Restaurant />
      <Footer footerData={footerData} />
    </div>
  );
};

export default App;
