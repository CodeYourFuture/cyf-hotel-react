import React from "react";
import SearchButton from "./SearchButton";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("")
  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.search(searchInput);
  }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form 
            className="form-group search-box" 
            onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                value={searchInput}
                onChange={handleSearchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const SearchButton = () => {
  return (
    <button type="submit" className="btn btn-primary">Search</button>
  )
}

export default Search;
