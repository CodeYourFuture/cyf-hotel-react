import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  const tableInfo = [
    {
      id: 123,
      title: "Miss",
      firstName: "Megumi",
      surName: "Yanaka",
      email: "margaret_mori0102@yahoo.com",
      roomId: 7,
      checkin: "10/10/2021",
      checkout: "12/10/2021"
    }
  ];
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults tableInfo={tableInfo} />
      </div>
    </div>
  );
};

export default Bookings;
