import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = ({
  search,
  searchInput,
  handleSearchInput,
  loading,
  bookings,
  message
}) => {
  return (
    <div className="container">
      <Search
        search={search}
        value={searchInput}
        handleSearchInput={handleSearchInput}
      />
      {loading ? <SearchResults results={bookings} /> : <p>{message}</p>}
    </div>
  );
};

export default Bookings;
