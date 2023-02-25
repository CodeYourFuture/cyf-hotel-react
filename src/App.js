import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cities={citiesAPI} />
      <Bookings />
      <Footer
        arr={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

const Heading = () => (
  <header className="App-header">
    <img
      className="App-logo"
      src="https://img.freepik.com/premium-vector/hotel-logo-simple-illustration_434503-736.jpg?w=2000"
    />
    <span className="App-title">CYF Hotel</span>
  </header>
);

const citiesAPI = [
  {
    name: "Glasgow",
    image: "https://media.timeout.com/images/105400989/750/422/image.jpg",
    description:
      "Glasgow is Scotland's largest city, and it forms an independent council area that lies entirely within the historic county of Lanarkshire.The city occupies much of the lower Clyde valley, and its suburbs extend into surrounding districts.",
    information: "https://peoplemakeglasgow.com"
  },
  {
    name: "Manchester",
    image:
      "https://lp-cms-production.imgix.net/2022-11/Manchester-iStock-465388886-RFC.jpeg",
    description:
      "Manchester is the nucleus of the largest metropolitan area in the north of England, and it remains an important regional city, but it has lost the extraordinary vitality and unique influence that put it at the forefront of the Industrial Revolution.",
    information: "https://visitmanchester.com"
  },
  {
    name: "London",
    image:
      "https://www.fodors.com/assets/destinations/2869/tower-bridge-london-england_980x650.jpg",
    description:
      "London is among the best known writings by visionary English poet William Blake. The poem describes a walk through London, which is presented as a pained, oppressive, and impoverished city in which all the speaker can find is misery.",
    information: "https://visitlondon.com"
  }
];

export default App;
