import React from "react";
import Button from "./Button.js";

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
                <Button name={"Search Ids"} onClick={this.props.onClickId} />
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
                <Button
                  name={"Search by name"}
                  onClick={this.props.onClickName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
