import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

import Bookings from "./Bookings";
import "./App.css";

let cities = [
  {
    city: "Glasgow",
    link: "https://peoplemakeglasgow.com",
    imageURL:
      "https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-gallery-with-text/lightshow_at_festival_2018_glasgow_vb34168999.jpg"
  },
  {
    city: "Manchester",
    link: "https://peoplemakeglasgow.com",
    imageURL:
      "https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/manchester_town_hall_ve13463_1200x600_0_1_0_0.jpg"
  },
  {
    city: "London",
    link: "https://peoplemakeglasgow.com",
    imageURL: "http://london.com/wp-content/uploads/2019/03/london_001.jpg"
  }
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cities={cities} />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
