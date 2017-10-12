import React, { Component } from "react";
import Button from './Button';

class Search extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row">
          <div className="col">
            <table className="table search-table">
              <thead>
                <tr>
                  <th>Customer id</th>
                  <th />
                  <th>Customer Name</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      id="customerId"
                      type="text"
                      className="form-control"
                      placeholder="Customer id"
                      name="customerId"
                      onChange = {this.props.onCustomerIdChange}
                    />
                  </td>
                  <td>
                    <Button 
                      classStyle={"btn btn-primary fn-submit-name"} 
                      searchById={"Search Ids"} 
                      onClick={this.props.searchByCustomerId} 
                    />
                  </td>
                  <td>
                    <input
                      id="customerName"
                      type="text"
                      className="form-control"
                      placeholder="Customer Name"
                      name="customerName"
                      onChange={this.props.onCustomerNameChange}
                    />
                  </td>
                  <td>
                    <Button 
                      classStyle={"btn btn-primary fn-submit-name"} 
                      searchById={"Search Names"} 
                      onClick={this.props.searchByCustomerFirstName} 
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
