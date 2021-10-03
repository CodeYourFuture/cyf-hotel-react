import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";
import londonImage from "./images/london-card.jpg";
import glasgowImage from "./images/glasgow-card.jpg";
import manchesterImage from "./images/manchester-card.jpg";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards
        cities={[
          {
            name: "London",
            image: londonImage,
            imageAlt: "City of London",
            link: "https://visitlondon.com/",
            comment:
              "Whether you opt for a luxurious dining cruise or an adrenaline-pumping speedboat experience, see London's famous sites on a top river Thames cruise."
          },
          {
            name: "Glasgow",
            image: glasgowImage,
            imageAlt: "City of Glasgow",
            link: "https://peoplemakeglasgow.com/",
            comment:
              "Glasgow's city centre is home to flagship stores, impressive shopping centres and designer favourites all within an easily walkable area around town."
          },
          {
            name: "Manchester",
            image: manchesterImage,
            imageAlt: "City of Manchester",
            link: "https://www.visitmanchester.com/",
            comment:
              "Explore Manchester’s rich legacy of innovations and discoveries in the Revolution Manchester Gallery, our family friendly interactive gallery. "
          }
        ]}
      />
      <Bookings />
      <Footer
        contactInfo={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
