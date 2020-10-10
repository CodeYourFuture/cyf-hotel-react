import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ searchVal }) => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("https://hotel-server.herokuapp.com/bookings/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: searchInput,
        email: searchInput,
        surName: searchInput,
        roomId: searchInput,
        checkIn: searchInput,
        checkOut: searchInput
      })
    })
      .then(res => res.json())
      .then(res => console.log("Res", res))
      .then(data => {
        console.log("Search result :", data);
        searchVal(searchInput);
      });
  }
  return (
    <div className="search col-12 mt-3">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
