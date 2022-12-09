import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = ({
  search,
  searchInput,
  handleSearchInput,
  loading,
  filteredBookings,
  bookings,
  message
}) => {
  return (
    <div className="ms-5 me-5 ps-5 pe-5">
      <Search
        search={search}
        value={searchInput}
        handleSearchInput={handleSearchInput}
      />
      {loading ? (
        <SearchResults results={searchInput ? filteredBookings : bookings} />
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default Bookings;
