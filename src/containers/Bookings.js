import React, { Component } from 'react';
import Search from '../components/Search.js';
import ResultTable from '../components/Results.js';
import FakeBookings from '../data/fakeBookings.json';

//import moment from 'moment';

import '../results.css';

export default class Bookings extends Component {

    constructor() {
        super()
        this.state = {
            filterName: " ",
            FakeBookings: [],
            filteredBookings: []
        }
    }

    componentWillMount() {
        this.setState({
            FakeBookings,
            filteredBookings: FakeBookings
        })
    }

    filterBooking = (input) => {

        var filteredBookings = FakeBookings.filter((booking) => {
            console.log(booking.firstName)
            return booking.id === parseInt((input), 10)
                || booking.firstName.toLowerCase() === input
                || booking.surname.toLowerCase() === input

        })
        this.setState({ filteredBookings: filteredBookings });
        return filteredBookings;
    }

    handleClick = (input) => {
        var newBookings = this.filterBooking(input)
        this.setState({ filteredBookings: newBookings });

    }

    search = () => {
        console.info('TO DO!');
    };

    render() {

        return (

            <div className="App-content">
                <div className="container">
                    <Search
                        search={this.search}
                        resultSize={this.state.filteredBookings.length}
                        handleClick={this.handleClick}
                    />
                    <div>Results: {this.state.filteredBookings.length}</div>
                    <ResultTable reservations={this.state.filteredBookings} />
                </div>
            </div>
        );
    }
}

