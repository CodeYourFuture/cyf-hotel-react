import React, { useState, useEffect } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const handleChange = e => {
    setSearchField(e.target.value);
  };

  const [searchField, setSearchField] = useState("");

  // useEffect(() => {
  //    const filteredData = data.list.filter(
  //     (person) =>
  //       person.firstName
  //         .toLowerCase()
  //         .includes(searchField.toLocaleLowerCase()) ||
  //       person.surname.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
  //       person.email.toLowerCase().includes(searchField.toLocaleLowerCase()),
  //   )
  //    },[])
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            className="form-group search-box"
            onSubmit={event => {
              props.search(searchField);
              event.preventDefault();
            }}
          >
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="search"
                id="customerName"
                className="form-control"
                value={searchField}
                placeholder="Customer name"
                onChange={handleChange}
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
