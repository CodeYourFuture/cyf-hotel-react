import React from "react";
import ButtonSearch from "./Button";

const Search = props => {
  console.log(props);
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="myRow">
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
                  onChange={props.UserInput}
                />
                <ButtonSearch search={props.search} buttonText="Search Id" />
              </div>
            </div>
          </div>
        </div>

        <div className="row search-wrapper">
          <div className="col">
            <div className="form-group search-box ">
              <label htmlFor="customerId">Customer name</label>
              <div className="search-row">
                <input
                  type="text"
                  id="customerId"
                  className="form-control"
                  placeholder="Customer name"
                  onChange={props.UserInput}
                />
                <ButtonSearch
                  buttonText="Search Customer"
                  // search={props.UserInput}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
