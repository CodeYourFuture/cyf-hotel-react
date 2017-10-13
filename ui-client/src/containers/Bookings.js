import React, { Component } from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';

export default class Bookings extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      reservations: props.reservations,
      customerId: null,
      customerName: null,
      isSortedASC: false,
      isSortedDES: false,
      numberOfResults: props.reservations.length,
    };
  }
  searchByCustomerId = e => {
    e.preventDefault();
    let customerId = this.state.customerId;
    if (customerId === null || customerId === '') {
      alert(
        'PLEASE, you need to specify the ID of the customer before you click search!!!'
      );
    } else {
      //reservations will hold the initial data so that the search is always on the entire data
      const reservations = this.props.reservations.filter(
        reservation => reservation.id === Number(customerId)
      );
      if (reservations.length < 1) {
        alert(
          'SORRY, there is no reservation made by the customer with the id => ' +
            customerId +
            ' !!!'
        );
      } else {
        this.setState({
          reservations,
          numberOfResults: reservations.length,
        });
      }
    }
  };
  searchByCustomerFirstName = e => {
    e.preventDefault();
    let customerName = this.state.customerName;
    if (customerName === null || customerName === '') {
      alert(
        'PLEASE, you need to specify the First name of the customer before you click search!!!'
      );
    } else {
      const reservations = this.props.reservations.filter(
        reservation =>
          reservation.firstname.toLowerCase() === customerName.toLowerCase()
      );
      if (reservations.length < 1) {
        alert(
          'SORRY, there is no reservation made by the customer with the First name => ' +
            customerName +
            ' !!!'
        );
      } else {
        this.setState({
          reservations,
          numberOfResults: reservations.length,
        });
      }
    }
  };
  //update the customerName when there is a change on the input field of the customerName
  handleUpdateCustomerName = e => {
    this.setState({ customerName: e.target.value });
  };
  handleUpdateCustomerId = e => {
    this.setState({ customerId: e.target.value });
  };
  //to sort the reservations result in ascending order
  sortASC = sortBy => {
    this.setState({
      isSortedASC: true,
      isSortedDES: false,
    });
    return this.state.reservations.sort(function(reservationA, reservationB) {
      //assume that roomId and totalDays are always numbers
      if (sortBy === 'roomId' || sortBy === 'totalDays') {
        return reservationA[sortBy] - reservationB[sortBy];
      } else {
        //for other sort by queries like firstname, surname,email...
        if (reservationA[sortBy] < reservationB[sortBy]) {
          return -1;
        }
        if (reservationA[sortBy] > reservationB[sortBy]) {
          return 1;
        }
        return 0;
      }
    });
  };
  //to sort the reservations result in descending order
  sortDES = sortBy => {
    this.setState({
      isSortedDES: true,
      isSortedASC: false,
    });
    return this.state.reservations.sort(function(reservationA, reservationB) {
      if (sortBy === 'roomId' || sortBy === 'totalDays') {
        return reservationB[sortBy] - reservationA[sortBy];
      } else {
        if (reservationB[sortBy] < reservationA[sortBy]) {
          return -1;
        }
        if (reservationB[sortBy] > reservationA[sortBy]) {
          return 1;
        }
        return 0;
      }
    });
  };
  //to handle clicks that come from clicking any of the headings of the table
  headerclick = e => {
    // id will return the value of the heading such as firstname, roomId, surname..
    const sortBy = e.target.id;
    /*
      on initial click sort the results in ascending order alphabetically or 
      from min to max if the column clicked is roomId or totalDays
      , if it is not alrady sorted ascendingly,
    */
    this.sortASC(sortBy);
    /*
      if the result is already sorted ascendingly, sort it in descending order alphabetically or 
      from max to min if the column clicked is roomId or totalDays
    */
    if (this.state.isSortedASC) {
      this.sortDES(sortBy);
    }
  };
  render() {
    return (
      <div className="App-content">
        <div className="container">
          {/* search row with search by customerId and customerName input fields and buttons */}
          <Search
            searchByCustomerId={this.searchByCustomerId}
            searchByCustomerFirstName={this.searchByCustomerFirstName}
            onCustomerNameChange={this.handleUpdateCustomerName}
            onCustomerIdChange={this.handleUpdateCustomerId}
          />
          {/*result table with the details of reservations made */}
          <Results
            reservations={this.state.reservations}
            headerclick={this.headerclick}
            numberOfResults={this.state.numberOfResults}
            updateRowsSelected={this.updateNumberOfRowsSelected}
          />
        </div>
      </div>
    );
  }
}
