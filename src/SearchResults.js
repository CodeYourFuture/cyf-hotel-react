import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";
import moment from "moment";
import EachRowInSearchResults from "./EachRowInSearchResults";

const SearchResults = (props) => {
  const bookingsEntries = props.booking.map((booking) => {
    const start = moment(booking.checkInDate);
    const end = moment(booking.checkOutDate);
    const numberOfNights = end.diff(start, "days");

    return (
      <EachRowInSearchResults
        key={nanoid()}
        booking={booking}
        numberOfNights={numberOfNights}
        setCustomerId={props.setCustomerId}
        setCustomerProfile={props.setCustomerProfile}
      />
    );
  });
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number Of Nights</th>
          </tr>
        </thead>

        <tbody>{bookingsEntries}</tbody>
      </table>
    </>
  );
};

export default SearchResults;
