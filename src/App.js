import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards
        imageSrc="http://peoplemakeglasgow.com/imager/general/548549/European-Sport-Capital_Header-Image-1_961ee30b631a75b37d23eb0e09df30ea.png"
        link="http://www.peoplemakeglasgow.com"
        destination="Glasgow"
      />
      <TouristInfoCards
        imageSrc="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FManOne-03%284%29.jpg&action=Background_Overlay"
        link="http://www.visitmanchester.com"
        destination="Manchester"
      />
      <TouristInfoCards
        imageSrc="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/tower-bridge-shutterstock-1920x582.jpg?mw=1920&hash=078DDB24AC457E2D8F231FC3E0F7EC55A00C88E3"
        link="http://www.visitlondon.com"
        destination="London"
      />
      <Bookings />
      <Footer
        contacts={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
