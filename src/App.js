import React from "react";
import Header from "./Header";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import InfoCards from "./InfoCards";
import Footer from "./Footer";
import "./App.css";

const cardsInfo = [
  {
    city: "London",
    link: "http://visitlondon.com",
    img:
      "https://cdn.londonandpartners.com/asset/cbb431b093858a5a1fb9f52fe10d7673.jpg",
    paragraph:
      "Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit."
  },
  {
    city: "Manchester",
    link: "http://visitmanchester.com",
    img:
      "https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2FManchester_Exterior_1__web_135333318.jpg&action=FeaturedItems1x1",
    paragraph:
      "Welcome to the official tourism site of Greater Manchester where you can search for things to do in Manchester and find out what's on, as well as getting inspiration for your visit to this fantastic city region. Youthful, diverse, energetic and bursting with character."
  },
  {
    city: "Glasgow",
    link: "http://peoplemakeglasgow.com",
    img:
      "https://peoplemakeglasgow.com/imager/general/62605/Tours-in-Glasgow-University-of-Glasgow-Content-Block_8dc3bdbc8660ad389ec95cdf9b15d797.jpg",
    paragraph:
      "From independent stores to high street retailers, Glasgow is the best shopping city. Glasgow's city centre is home to flagship stores, impressive shopping centres and designer favourites all within an easily walkable area. The city is also rich in artists and creators which makes for a thriving and exciting independent shopping scene."
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
      <Header />
      <InfoCards cardsInfo={cardsInfo} />
      <Restaurant className="restaurant" />
      <Bookings />
      <Footer address={address} />
    </div>
  );
};

export default App;
