import React from "react";
import Button from "./Button.js";
import Button2 from "./Button2.js";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <div className="form-group search-box">
              <label htmlFor="customerId">Customer Id</label>
              <div className="search-row">
                <input
                  type="text"
                  id="customerId"
                  className="form-control"
                  placeholder="Customer Id"
                />
                <Button />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="form-group search-box">
              <label htmlFor="customerId">Booking Name</label>
              <div className="search-row">
                <input
                  type="text"
                  id="customerId"
                  className="form-control"
                  placeholder="Booking name"
                />
                <Button2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
