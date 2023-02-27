import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import SearchResults from "./SearchResults";
import data from "./data/fakeBookings.json";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />

      {data.map((item) => (
        <SearchResults
          key={item.id}
          id={item.id}
          title={item.title}
          firstName={item.firstName}
          surname={item.surname}
          email={item.email}
          roomId={item.roomId}
          checkInDate={item.checkInDate}
        />
      ))}
      <table>
        <thead></thead>
      </table>
    </div>
  );
};

export default App;
