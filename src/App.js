import React from "react";
import Search from "./Search";
import Bookings from "./Bookings";
import "./App.css";
import InfoCard from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <InfoCard
        imageSource="https://cdn.onlinewebfonts.com/svg/img_411606.png
"
        href="http://peoplemakeglasgow.com/"
        title="Glasgow"
        paragraph=" This is the best place which you can see."
      />
      <InfoCard
        imageSource="https://cdn.onlinewebfonts.com/svg/img_411606.png
"
        href="http://visitmanchester.com/"
        title="Manchester"
        paragraph=" This is the best place which you can see."
      />
      <InfoCard
        imageSource="https://cdn.onlinewebfonts.com/svg/img_411606.png
"
        href="http://visitlondon.com/"
        title="London"
        paragraph=" This is the best place which you can see."
      />
      <Bookings />

      <Footer />
    </div>
  );
};

export default App;
