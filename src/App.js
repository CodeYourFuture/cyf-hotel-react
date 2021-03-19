import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";

const contact = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading className="App" />
      <TouristInfoCards />
      <Bookings />
      {/* <SearchResults /> */}
      {/* <header className="App-header">CYF Hotel</header> */}
      <Footer address={contact} />
    </div>
  );
};

export default App;
