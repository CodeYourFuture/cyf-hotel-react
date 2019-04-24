import React from "react";
import FakeBookings from './data/fakeBookings.json';
import { BookingsHeader, bookingsHeaders } from './BookingsHeader'
import DisplayBookings from './DisplayBookings'


const SearchResults = () => {

    return (
        <table className="table ">
            <BookingsHeader bookingsHeadersInfo={bookingsHeaders} />
            <DisplayBookings bookingsDetails={FakeBookings} />

        </table>);
}

export default SearchResults;