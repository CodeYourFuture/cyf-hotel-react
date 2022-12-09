import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TouristInfoCards from "./components/touristInfocards/TouristInfoCards";
import Bookings from "./components/Bookings";
import Restaurant from "./components/Restaurant";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <TouristInfoCards />
      <div className="wrapper">
        <Bookings />
      </div>
      <Restaurant />
      <Footer
        details={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};
export default App;