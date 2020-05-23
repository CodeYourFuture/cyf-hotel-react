import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards
        city="Glasgow"
        site="https://peoplemakeglasgow.com/"
        image="https://frontline-collections.com/wp-content/uploads/2018/02/Glasgow-Debt-Collection.jpg"
      />
      <TouristInfoCards
        city="Manchester"
        site="https://www.visitmanchester.com/"
        image="https://www.prolificnorth.co.uk/sites/default/files/styles/lightbox_large/public/images/news/manchester-cityscape0.jpg?itok=VjQDdTYJ"
      />
      <TouristInfoCards
        city="London"
        site="https://www.visitlondon.com/"
        image="https://www.fodors.com/assets/destinations/2869/tower-bridge-london-england_980x650.jpg"
      />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
