import React from "react";
import Button from "./Button";

class Search extends React.Component {
  
  setInputRef = (input) => {
    this.input = input
  }
  handeleSubmit = event => {
    console.log(this.input.value);
    event.preventDefault();
  }
  
  render() {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
              ref = {this.setInputRef}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer Id"
              />
            <Button />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
}
export default Search;

