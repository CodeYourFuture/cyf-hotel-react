import React from "react";
import moment from "moment";
import { useState } from "react";
import DisplayRow from "./DisplayRow";

const SearchResults = (props) => {
  const headingsKeys = [
    "id",
    "title",
    "firstName",
    "surname",
    "email",
    "roomId",
    "checkInDate",
    "checkOutDate",
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check-In Date</th>
          <th scope="col">Check-Out Date</th>
          <th scope="col">Number of Nights</th>
        </tr>
      </thead>

      <tbody>
        {props.theBookings.map((booking, index, array) => {
          return (
            <DisplayRow key={index} theBooking={booking} theIndex={index} />
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
