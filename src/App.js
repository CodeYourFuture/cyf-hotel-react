import React from "react";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./components/Footer";
import Restaurant from "./Restaurant";

import "./App.css";

const App = () => {
   return (
      <div className="App">
         <Heading />
         <TouristInfoCards />
         <Bookings />
         <Restaurant />

         <Footer />
      </div>
   );
};

export default App;
