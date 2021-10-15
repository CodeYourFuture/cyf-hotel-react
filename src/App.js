import React from "react";

import Bookings from "./Bookings";
import "./App.css";

// My import
import Header from "./Header";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Bookings />
      <TouristInfoCards
        cardInfo={[
          {
            image:
              "https://live.staticflickr.com/3852/14678109977_4389d8e8d3_b.jpg",
            alt: "Glasgow",
            link: "https://peoplemakeglasgow.com/",
            title: "Glasgow",
            desc:
              "Useful guides for your visit to the city, from getting here, accommodation to getting around we have all the useful info you need."
          },

          {
            image:
              "https://live.staticflickr.com/65535/48711815416_3430b77bf7_b.jpg",
            alt: "Manchester",
            link: "https://www.visitmanchester.com/",
            title: "Manchester",
            desc:
              "outhful, diverse, energetic and bursting with character; Manchester is one of the most exciting places to visit in the UK right now where everybody and anybody is very warmly welcomed."
          },

          {
            image:
              "https://live.staticflickr.com/65535/51511578129_38ee1d4269_b.jpg",
            alt: "London",
            link: "https://visitlondon.com/",
            title: "London",
            desc:
              "Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London"
          }
        ]}
      />

      <Restaurant />

      <Footer
        info={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
