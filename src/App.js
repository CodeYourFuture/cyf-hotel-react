import React from "react";
// import SearchButton from "./SearchButton";

import Bookings from "./Bookings";
// import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
// import SearchResults from "./SeaarchResults";

const data = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <Bookings />
      <TouristInfoCards />
      <Footer data={data} />
    </div>
  );
};

export default App;
