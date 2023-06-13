import React from "react";

const SearchButton = () => {

    return (
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerId">Customer id</label>
            <div className="search-row">
              <input
                type="number"
                id="customerId"
                className="form-control"
                placeholder="Customer id"
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default SearchButton;
