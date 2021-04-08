import React, { useState } from "react";

const Search = ({ setBookings }) => {
  const [searchedText, setSearchedText] = useState("");
  function handleSearchInput(e) {
    setSearchedText(e.target.value);
  }
  const submitSearch = e => {
    e.preventDefault();
    if (searchedText !== "") {
      fetch(
        "https://cyf-alexandru-hotel-server.herokuapp.com/bookings/search/" +
          searchedText
      )
        .then(res => res.json())
        .then(data => setBookings(data));
    } else {
      fetch("https://cyf-alexandru-hotel-server.herokuapp.com/bookings")
        .then(res => res.json())
        .then(data => setBookings(data));
    }
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <hr />
      <div className="row ">
        <div className="col">
          <form className="form-group search-box" onChange={submitSearch}>
            <div className="search-row">
              <label>
                Search
                <input
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer name"
                  onChange={handleSearchInput}
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
