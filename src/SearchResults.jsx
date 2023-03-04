import React, { useState } from "react";
import SingleBooking from "./SingleBooking"
import data from "./data/fakeBookings.json"
import moment from "moment/moment"

function SearchResults() {

  const [Bookings, setBookings] = useState(data);

  return <>
  
<table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
            <th scope="col">Room</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Total nights</th>
          </tr>
        </thead>
        <tbody>
          {Bookings.map((item) => (
            <SingleBooking
              key={item.id}
              id={item.id}
              title={item.title}
              firstName={item.firstName}
              surname={item.surname}
              email={item.email}
              roomId={item.roomId}
              checkInDate={item.checkInDate}
              checkOutDate={item.checkOutDate}
              nights={moment(item.checkOutDate).diff(moment(item.checkInDate),"days")}
            />
          ))}
        </tbody>
      </table>
  </>
}

export default SearchResults

