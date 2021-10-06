import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

// import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {
          <SearchResults
            results={FakeBookings}
            formInfo={[
              "id",
              "title",
              "first Name",
              "surname",
              "email",
              "room Id",
              "check in date",
              "check out date"
            ]}
            // id="hh"
            // title=""
            // first name=""
            // surname=""
            // email=""
            // room Id=""
            // check in date=""
            // check out date=""
          />
        }
      </div>
    </div>
  );
};

export default Bookings;
