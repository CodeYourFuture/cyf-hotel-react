import React, { Component } from 'react';
import Search from '../components/Search.js';
import ResultTable from '../components/Results.js';
import FakeBookings from '../data/fakeBookings.json';
import NewForm from '../components/ReservationForm.js';


//import moment from 'moment';

import '../results.css';

export default class Bookings extends Component {

  constructor() {
    super()
    this.state = {
      filterName: " ",
      isLoading: true,
      err: null,
      reservations: [],
      filteredBooking: []
    } 
  }


  filterBooking = (input) => {

    var filteredBookings = FakeBookings.filter((booking) => {
      console.log(booking.firstName)
      return booking.id === parseInt((input), 10)
        || booking.firstName.toLowerCase() === input
        || booking.surname.toLowerCase() === input

    })
    this.setState({ reservations: filteredBookings });
    return [];
  }

  handleClick = (input) => {
    var newBookings = this.filterBooking(input)
    this.setState({ reservations: newBookings });

  }

  addNewReservations = () => {
    //let data = [...this.state.data, items]
    this.setState({
      //data: data
    })
  }

  search = () => {
    console.info('TO DO!');
  };

  componentDidMount() {

    fetch(`http://localhost:8080/api/reservations/`)
        .then(res => {
      
            return res.json()
        })
        .then(json => {
          console.log(json)
          return json
        })
    
    // getReservations()
    // .then(reservationsFromApi => {
    //   this.setState ({
    //     reservations: reservationsFromApi.reservations
    //   })
    // })
  }

  render() {

    return (

      <div className="App-content">
        <div className="container">
          <Search
            search={this.search}
            resultSize={2}
            handleClick={this.handleClick}
          />
          <div>Results: {2}</div>
          <ResultTable 
          reservations={[]}
          sortBy={this.sortBy} 
          />
          <hr />
          <NewForm addNewReservations={this.addNewReservations}/>
        </div>
      </div>
    );
  }
}

