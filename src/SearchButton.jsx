import React from "react";

const SearchButton = () => {
    return ( <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <button className="btn btn-primary">Search</button>
            </div>
    );
}

export default SearchButton;