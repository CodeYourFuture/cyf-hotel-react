import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          results={[
            {
              id: "5",
              title: "Mr",
              firstName: "Andrew",
              surname: "robertson",
              email: "dfdfd@dfdf",
              roomId: "55",
              checkInDate: "12/12/21",
              checkOutDate: "12/34/56"
            }
          ]}
        />
      </div>
    </div>
  );
};

export default Bookings;
