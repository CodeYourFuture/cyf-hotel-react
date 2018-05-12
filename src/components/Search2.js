import React from "react";
import Button from "./Button.js";
import Results from "../containers/Results.js";

class Search2 extends React.Component {
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
                <Button title="Search Id" />{" "}
                {/* call same button to add the title Search Id */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="form-group search-box">
              <label htmlFor="customerName">Customer Name</label>
              <div className="search-row">
                <input
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer Name"
                />
                <Button title="Search Name" />
                {/* call same button to add the title Search Name */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search2;
