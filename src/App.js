import React from "react";

import Bookings from "./components/Bookings";
import Heading from "./components/heading/Heading";
import TouristInfoCards from "./components/touristInfoCards/TouristInfoCards";
import Restaurant from "./components/restaurant/Restaurant";
import Footer from "./components/footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading text={"CYF Hotel - Marina"} />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        contact={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
