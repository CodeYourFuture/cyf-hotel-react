import React, { useState } from "react";
import GuestRow from "./GuestRow.js";

const SearchResults = ({ bookings, submit }) => {
  let filter = bookings.filter(
    guest =>
      guest.firstName.toLowerCase().includes(submit.toLowerCase()) ||
      guest.surname.toLowerCase().includes(submit.toLowerCase())
  );
  return (
    <table className="table table-striped">
      <thead>
        <tr className="bg-dark text-white">
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Number of nights stay</th>
        </tr>
      </thead>
      <tbody>
        {filter.map((guest, index) => (
          <GuestRow guest={guest} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
