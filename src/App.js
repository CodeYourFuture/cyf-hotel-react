import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  const cards = [
    {
      Image:
        "https://peoplemakeglasgow.com/imager/general/94964/Independent-Shopping-The-Hidden-Lane-Header-Block_363498fd50542583ec55608561258317.jpg",
      alt: "Glasgow",
      title: "Glasgow",
      text:
        "You’re guaranteed to find accommodation in Glasgow which suits your taste and budget. Whether you’re looking for something uniquely Glaswegian, a trendy hotel, a vibrant hostel or a comfortable city centre apartment, you can be assured of a warm welcome.",
      link: "peoplemakeglasgow.com"
    },
    {
      Image:
        "https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FSt%20Peters%20Square%20Tour.jpg&action=Background_Overlay",
      alt: "Manchester",
      title: "Manchester",
      text:
        "Welcome to the official tourism site of Greater Manchester where you can search for things to do in Manchester and find out what's on, as well as getting inspiration for your visit to this fantastic city region.",
      link: "https://www.visitmanchester.com/"
    },
    {
      Image:
        "https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/lets-do-london/ldl-web_daytime_1920x582_01-min.jpg?mw=1385&hash=C2B1A8CCBD4A065F193647D2AC49FB91B998EB8B",
      alt: "London",
      title: "Londons",
      text:
        "Whatever your budget, find and book accommodation in London. Our guide covers London hotels, B&Bs, self-catering, camping and more.",
      link: "visitlondon.com"
    }
  ];

  const footer = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards cards={cards} />
      <Restaurant />
      <Footer footer={footer} />
    </div>
  );
};

export default App;
