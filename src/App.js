import React from "react";
import Header from "./Header";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import "./App.css";

const touristInfoData = [
  {
    img: require("./images/glasgow.png"),
    title: "Glasgow",
    description:
      "From independent stores to high street retailers, Glasgow is the best shopping city. Glasgow's city centre is home to flagship stores, impressive shopping centres and designer favourites all within an easily walkable area.The city is also rich in artists and creators which makes for a thriving and exciting independent shopping scene.",
    button: "https://peoplemakeglasgow.com/"
  },
  {
    img: require("./images/manchester.png"),
    title: "Manchester",
    description:
      "Known throughout the world as the birthplace of the industrial revolution, Manchester has a proud history in science, politics, music, arts and sport. And today the city combines this heritage with a progressive vision to be a city that delivers surprise and delight in equal measures.",
    button: "https://www.visitmanchester.com/"
  },
  {
    img: require("./images/london.png"),
    title: "London",
    description:
      "Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit.",
    button: "https://www.visitlondon.com/"
  }
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        {touristInfoData.map(touristInfo => (
          <TouristInfoCards
            img={touristInfo.img}
            title={touristInfo.title}
            description={touristInfo.description}
            button={touristInfo.button}
          />
        ))}
      </div>
      <Bookings />
      <Restaurant />
      <Footer
        address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
