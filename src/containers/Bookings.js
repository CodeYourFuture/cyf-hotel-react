import React, { Component } from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';
// import FakeBookings from '../data/fakeBookings.json';

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputID: '',
      inputName: '',
      bookingsState: [],
      bookings: [],
      isFetched: false,
      isLoading: false,
      error: ''
    };
  };
  // http://localhost:3000/api/customers-data/
  // https://river-interest.glitch.me                error
  // https://mire-hub.glitch.me   timeout 5 sec

  componentDidMount() {
    if (this.state.isFetched === false) {
      this.setState({ isLoading: true });
      fetch(`https://mire-hub.glitch.me`)
        .then(response => {
          if (response.status >= 200 && response.status < 300) {
            return response;
          } else {
            throw new Error("HTTP error");
          }
        })
        .then(response => { return response.json() })
        .then(data => {
          let addRowState = data.map((obj) => ({ ...obj, 'isActive': false })); // data.rows.map  for local data
          this.setState({
            bookingsState: addRowState,   // data.rows for local data
            bookings: addRowState,
            isFetched: true,
            isLoading: false
          });
        })
        .catch(err => {
          this.setState({
            isLoading: false,
            error: err.toString()
          });
        });
    };
  };

  clickById = event => {
    event.preventDefault();
    this.setState({
      inputID: event.target.value
    });
  };

  clickName = event => {
    event.preventDefault();
    this.setState({
      inputName: event.target.value
    });
  };

  bookingsById = () => {
    // const FakeBookings = this.data;
    if (this.state.inputID !== '') {
      var filteredBookings = this.state.bookings.filter(booking => {
        return booking.id === parseInt(this.state.inputID, 10)
      });
      this.setState({
        bookings: filteredBookings,
        inputID: ''
      });
    } else {
      return this.setState({
        bookings: this.state.bookingsState,
        inputID: ''
      });
    }
  };

  customerName = () => {
    // const FakeBookings = this.data;
    if (this.state.inputName !== '') {
      var filteredBookings = this.state.bookings.filter(booking => {
        return (booking.firstName + " " + booking.surname) === this.state.inputName
      });
      this.setState({
        bookings: filteredBookings,
        inputName: ''
      })
    } else {
      return this.setState({
        bookings: this.state.bookingsState,
        inputName: ''
      });
    }
  };

  render() {

    if (this.state.error) {
      return (
        <h2>There is an error: <span>{this.state.error}</span></h2>
      )
    } else {
      if (this.state.isLoading) {
        return (<h2>There is loading data: please wait</h2>)
      }
      else {
        return (

          <div className="App-content">
            <div className="container">
              <Search clickById={this.clickById}
                clickName={this.clickName}
                bookingsById={this.bookingsById}
                customerName={this.customerName}
                inputID={this.state.inputID}
                inputName={this.state.inputName}
              />
              <Results result={this.state.bookings} />

            </div>
          </div>
        );
      }
    }
  }
}
export default Bookings;