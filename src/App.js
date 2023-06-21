import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Bookings from "./Bookings";
import SearchResults from "./SearchResults";
import "./App.css";
import Heading from "./Heading";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer
        addressDetail={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789",
        ]}
      />
    </div>
  );
};

export default App;
