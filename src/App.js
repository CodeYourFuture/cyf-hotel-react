import React from "react";

import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="card-content">
        <TouristInfoCards
          name="Glasgow"
          url="https://peoplemakeglasgow.com"
          pic="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/04/16/glasgow-main.jpg?quality=75&width=1368&auto=webp"
          // description="From independent stores to high street retailers, Glasgow is the best
          // shopping city. Glasgow's city centre is home to flagship stores,
          // impressive shopping centres and designer favourites all within an
          // easily walkable area. The city is also rich in artists and creators
          // which makes for a thriving and exciting independent shopping scene."
        />
        <TouristInfoCards
          name="London"
          url="https://visitlondon.com"
          pic="https://www.fodors.com/assets/destinations/2869/tower-bridge-london-england_980x650.jpg"
        />
        <TouristInfoCards
          name="Manchester"
          url="https://www.visitmanchester.com"
          pic="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/ee/e8/the-famous-manchester.jpg?w=900&h=-1&s=1"
        />
      </div>
      <Bookings />
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
