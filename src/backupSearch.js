import React from "react";
import SearchButton from "./SearchButton";

const Search = () => {
  return (
    <div className="search row">
      <div className="row">
        <h4 className="text-left"> Search Bookings </h4>{" "}
      </div>{" "}
      <div className="row search-wrapper">
        {" "}
        <div className="col-sm">
          <form className="form-group search-box">
            <label htmlFor="customerName"> Customer name </label>{" "}
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton />
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Search;
