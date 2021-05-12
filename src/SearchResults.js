import React, { useState } from "react";
import BookingDetails from "./BookingDetails.js";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ bookings }) => {
  const [row, setRow] = useState([]);
  const [id, setId] = useState("");

  function profileClick(event) {
    const id = event.target.parentElement.parentElement.id;
    setId(id);
  }

  return (
    <>
      <h1>Hello World</h1>
      <CustomerProfile guestId={id} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">Duration</th>
            <th scope="col">Show Profile</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(info => (
            <BookingDetails
              key={info.id}
              info={info}
              row={row}
              setRow={setRow}
              profileClick={profileClick}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SearchResults;
