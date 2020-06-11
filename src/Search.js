import React, { useState } from "react";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.search(searchInput);
    setSearchInput("");
  };

  const toggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            onSubmit={handleSubmit}
            value={isClicked ? searchInput : null}
            className="customer-name"
          >
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                value={searchInput}
                className="form-control"
                placeholder="Customer name"
                onChange={handleSearchInput}
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
