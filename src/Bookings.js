import React from "react";
import Search from "./Search.js";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import SearchResults, { TableHeader } from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <TableHeader />
        {FakeBookings.map(data => (
          <SearchResults
            key={data["id"]}
            id={data["id"]}
            title={data["title"]}
            firstName={data["firstName"]}
            surname={data["surname"]}
            email={data["email"]}
            room={data["roomId"]}
            dateIn={data["checkInDate"]}
            dateOut={data["checkOutDate"]}
          />
        ))}
      </div>
    </div>
  );
};
export default Bookings;
