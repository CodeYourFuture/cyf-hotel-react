import React, { useState } from "react";

const Search = ({ bookings, setBookings, setRefreshMessages }) => {
  const [searchInput, setSearchInput] = useState("");

  // function searchBooking() {
  //   const convertedVal = searchInput.toLowerCase().trim();
  //   console.log(convertedVal);
  //   const matched = bookings.filter(({ firstName, surname }) => {
  //     firstName.toLowerCase().includes(convertedVal) ||
  //       surname.toLowerCase().includes(convertedVal);
  //   });
  //   console.log(matched);
  //   setBookings(matched);
  // }

  function handleSearchInput(e) {
    let searchValue = e.target.value.toLowerCase().trim();
    setSearchInput(searchValue);
    console.log(searchValue);
  }

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   searchBooking();
  //   console.log("Search for:", searchInput);
  // };

  function handleSearchSubmit(event) {
    event.preventDefault();
    const convertedVal = searchInput.toLowerCase().trim();
    console.log(convertedVal);

    const matched = bookings.filter(({ firstName, surname }) => {
      firstName.toLowerCase().includes(convertedVal) ||
        surname.toLowerCase().includes(convertedVal);
    });
    console.log(matched);
    setBookings(matched);
    event.target.reset();

    setRefreshMessages((prevRefreshMessages) => !prevRefreshMessages);

    setIsSubmitting(false);
  }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSearchSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                onChange={handleSearchInput}
                value={searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                label="Search"
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
