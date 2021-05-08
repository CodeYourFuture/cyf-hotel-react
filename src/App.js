import React from "react";
import Bookings from "./component/Bookings";
import "./App.css";
import Heading from "./component/Heading";
import TouristInfoCards from "./component/TouristInfoCards";
import Footer from "./component/Footer";
import Restaurant from "./component/Restaurant";

const cards = [
  {
    city: "Glasgow",
    link: "http://peoplemakeglasgow.com",
    img:
      "https://i2-prod.glasgowlive.co.uk/incoming/article11108743.ece/ALTERNATES/s615/pizapcom14592618842071.jpg"
  },
  {
    city: "Manchester",
    link: "http://visitmanchester.com",
    img:
      "https://previews.123rf.com/images/tupungato/tupungato1609/tupungato160900093/62861701-manchester-uk-travel-photos-collage-collage-includes-major-landmarks-like-city-hall-castlefield-wate.jpg"
  },
  {
    city: "London",
    link: "http://visitlondon.com",
    img:
      "https://previews.123rf.com/images/tupungato/tupungato1501/tupungato150100512/35938217-travel-photo-collage-from-london-uk-collage-includes-major-landmarks-like-big-ben-saint-paul-s-cathe.jpg"
  }
];

const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cards={cards} />
      <Bookings />
      <Restaurant />
      <Footer address={address} />
    </div>
  );
};

export default App;
