import React, { Component } from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';
import fakeBookings from '../data/fakeBookings.json';
import Counter from '../components/Counter';
//import addClickHandler from '../component/addClickHandler';

export default class Bookings extends Component {
  state = {
    results: fakeBookings,
    Counter:Results,
    customerIdInput: "",
    customerNameInput:"",
   
   
  }

  customerInputChange = (event) => {
    this.setState({
      customerIdInput: event.target.value
    })
  }
  customerNameInputChange = (event) => {
    this.setState({
      customerNameInput: event.target.value
    })
  }

  
  
 

  filteredCustomerId = (event) => {
    const { customerIdInput, results } = this.state;
    // const customerIdInput = this.state.customerIdInput;
    // const results = this.state.results;

    this.setState({
      results: results.filter(customer => customer.id === parseInt(customerIdInput, 10))
    })
  }
  filteredCustomerName = (event) => {
    const { customerNameInput, results } = this.state;
    this.setState({
      results: results.filter(customer => 
          customer.firstName === customerNameInput || 
          customer.surname === customerNameInput
        )
    })
  }
  render() {
    return (
      <div className="App-content">
        <div className="container">

          <Search
            customerIdInput={this.state.customerIdInput}
            customerNameInput={this.state.customerNameInput}
            customerInputChange={this.customerInputChange}
            customerNameInputChange={this.customerNameInputChange}
            filteredCustomerId={this.filteredCustomerId}
            filteredCustomerName={this.filteredCustomerName}
            
          />
          <Counter resultsCounter={this.state.results.length} />
          <Results results={this.state.results} />
          <ul>


          </ul>
        </div>
      </div>
    );
  }
}
// Filter the bookings by the customer id, by using state to control which results are seen. So for example, if you type 1 into the customer id search input, you will only see John Doe's booking

// Do the same to allow the bookings to be filtered by the customer's name. Make sure that you check the whole name (firstName and surname) in the search

// Add a counter above the results table which shows the number of results that match the search filter

// Add a click handler to each row in the results table that allows the user to "select" the row (and highlight with a different color). When clicking on the row for a second time, "unselect" the row. 
// Above the table, show a count of the number of selected rowsFilter the bookings by the customer id, by using state to control which results are seen.
//  So for example, if you type 1 into the customer id search input, you will only see John Doe's booking

// Do the same to allow the bookings to be filtered by the customer's name. Make sure that you check the whole name (firstName and surname) in the search

// Add a counter above the results table which shows the number of results that match the search filter

// Add a click handler to each row in the results table that allows the user to "select" the row (and highlight with a different color). When clicking on the row for a second time, "unselect" the row. Above the table, show a count of the number of selected rows