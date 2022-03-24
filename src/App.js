import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCard from "./TouristInfoCards";
// import ReactTable from "react-table"
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import SearchResult from "./SearchResults";
//import FakeBookings from "./data/fakeBookings.json";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCard />
      <Bookings />
      <SearchResult />
      <Restaurant />
      <Footer
        addresses={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
