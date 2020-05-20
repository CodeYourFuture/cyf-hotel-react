import React from "react";
import SearchButton from "./Search.js";
import ShowAll from "./ShowAll";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <SearchButton search={search} />
        <ShowAll />
      </div>
    </div>
  );
};

export default Bookings;
