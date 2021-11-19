import React from "react";

import "./App.css";
import Bookings from "./Bookings";
import Header from "./Heading";
import PlaceCard from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="row justify-content-around my-5">
        <PlaceCard
          name="Glasgow"
          info="I have nothing good to say about Glasgow"
          link="https://peoplemakeglasgow.com/"
          image="https://images.theconversation.com/files/426840/original/file-20211018-13-fdrvc6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
        />
        <PlaceCard
          name="Manchester"
          info="At least it isn't Birmingham"
          link="https://www.visitmanchester.com/"
          image="https://governmentbusiness.co.uk/sites/default/files/william-mccue-508892-unsplash_1.jpg"
        />
        <PlaceCard
          name="London"
          info="The capital of the UK, still very bad"
          link="https://visitlondon.com/"
          image="https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz"
        />
      </div>
      <Bookings />
      <Footer
        location={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
