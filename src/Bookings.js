import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = props => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults list={props.data} />
      </div>
    </div>
  );
};

export default Bookings;
