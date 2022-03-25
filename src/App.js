import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";

import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />

      <div className="containerOne">
        <TouristInfoCards
          image="https://media.gettyimages.com/photos/millenium-bridge-in-manchester-england-uk-millenium-bridge-picture-id667071566?s=612x612"
          name="Manchester"
          description="Visit all the fun sites in Manchester"
          button="Come Explore"
          link="https://www.visitmanchester.com/"
        />

        <TouristInfoCards
          image="https://thumbs.dreamstime.com/b/london-big-ben-houses-parliament-uk-49652572.jpg"
          name="London"
          description="Visit all the fun sites in London"
          button="Come Explore"
          link="https://visitlondon.com"
        />

        <TouristInfoCards
          image="https://media.istockphoto.com/photos/squinty-bridge-glasgow-picture-id469974825?k=20&m=469974825&s=612x612&w=0&h=SHYq92xjEKGDNZU1sVBnhQJKsTtujh7vv-psQ_zCNyw="
          name="Glassgow"
          description="Visit all the fun sites in Glasgow"
          button="Come Explore"
          link="https://peoplemakeglasgow.com/"
        />
      </div>

      <Bookings />

      <Footer
        const
        data={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
