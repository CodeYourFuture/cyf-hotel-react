import React from "react";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./components/Bookings";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  let cityDetails = [
    {
      name: "Glasgow",
      image: "https://tinyurl.com/4uadj546",
      url: "https://peoplemakeglasgow.com"
    },
    {
      name: "Manchester",
      image: "https://tinyurl.com/3969xzf5",
      url: "https://visitmanchester.com"
    },
    {
      name: "London",
      image: "https://tinyurl.com/75c99bpv",
      url: "https://visitlondon.com"
    }
  ];

  let footerItems = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <div className="card">
        {cityDetails.map((item, index) => {
          return (
            <TouristInfoCards
              key={index}
              cityName={item.name}
              src={item.image}
              url={item.url}
            />
          );
        })}
      </div>
      <Bookings />
      <Footer footerItems={footerItems} />
    </div>
  );
};

export default App;
