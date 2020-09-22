import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";
// import SearchButton from "./SearchButton";
import Heading from "./Heading";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer
        footer={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
