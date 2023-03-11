import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import moment from "moment";

function Table() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setBookings(data);
    })
  }, [])
  
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      {bookings.map((client) => {
        let a = moment(client.checkInDate, "YYYY-MM-DD");
        let b = moment(client.checkOutDate, "YYYY-MM-DD");
        return (
          <SearchResults
            key={client.id}
            id={client.id}
            title={client.title}
            firstName={client.firstName}
            surname={client.surname}
            email={client.email}
            roomId={client.roomId}
            checkInDate={client.checkInDate}
            checkOutDate={client.checkOutDate}
            numberOfNights={b.diff(a, "days")}
          />
        );
      })}
    </table>
  );
}

export default Table;
