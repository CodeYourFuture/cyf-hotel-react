import React from "react";
import Heading from "./Heading.js";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";
// import SearchResults from "./SearchResults.js";

const App = () => {
  return (
    <div className="App">
      <Heading className="App-header" />
      <div className="card-container">
        <TouristInfoCards />
      </div>
      <Bookings />
      <Restaurant />
      <Footer
        address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
