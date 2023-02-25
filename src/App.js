import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Heading from "./Heading";
import Footer from "./Footer";
import "./App.css";

const Glasgow = {
  src:
    "https://peoplemakeglasgow.com/assets/general/_1200x600_crop_center-center_none/Eco-City-Break-Queens-Park-Viewpoint-Header-Block.jpg",
  cardTitle: "Glasgow",
  cardText: " sdgssg",
  href: "https://peoplemakeglasgow.com/"
};

const Manchester = {
  src:
    "https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FManOne-03%284%29.jpg&action=Background_Overlay",
  cardTitle: "Manchester",
  cardText: " sdgssg",
  href: "https://www.visitmanchester.com/"
};

const London = {
  src:
    "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/tower-bridge-shutterstock-1920x582.jpg?mw=1920&hash=078DDB24AC457E2D8F231FC3E0F7EC55A00C88E3",
  cardTitle: "London",
  cardText: " sdgssg",
  href: "https://www.visitlondon.com/"
};

const cities = [Glasgow, Manchester, London];

const adress = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cities={cities} />
      <Bookings />

      <Footer adress={adress} />
    </div>
  );
};

export default App;
