import React from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const [searchInput, setSearchInput] = React.useState("");

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.search(searchInput);
  };

  // console.log(searchInput);

  return (
    <div className="search-container">
      <h3 className="search-title">Search Bookings</h3>
      <form className="search-form" onSubmit={handleSubmit}>
        <label className="search-form-label" htmlFor="customerName">
          Customer name
        </label>
        <div>
          <input
            type="text"
            id="customerName"
            value={searchInput}
            onChange={handleSearchInput}
            className="search-form-input"
            placeholder="Customer name"
          />
          <SearchButton />
        </div>
      </form>
    </div>
  );
};

export default Search;
