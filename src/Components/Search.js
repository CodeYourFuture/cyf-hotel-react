import React from "react";
import Button from './Button';
import './App.css'
class Search extends React.Component {

  setInputRef = (input) => {
    this.input = input;
  }
  onSubmit = (event) => {
    if (!this.input.value) {
      event.preventDefault();
      this.input.style.border = '2px solid red';
    } else {
      event.preventDefault();
      this.props.search(this.input.value)
      this.input.style.border = '';
    }
  }
  render() {
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form onSubmit={this.onSubmit} className="form-group search-box">
              <label htmlFor="customerName">Customer name</label>
              <div className="search-row">
                <input
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer Names"
                  ref={this.setInputRef}
                />
                <Button btnLabel="Search Names" />
              </div>
            </form>
          </div>
        </div>

      </div>
    );
  }
};

export default Search;
