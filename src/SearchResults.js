import React from "react";

export default function SearchResults() {
  let bookings = [
    {
      id: 1,
      title: "Mr",
      firstName: "John",
      surname: "Doe",
      email: "johndoe@doe.com",
      roomId: 2,
      checkInDate: "2017-11-21",
      checkOutDate: "2017-11-23"
    },
    {
      id: 2,
      title: "Doctor",
      firstName: "Sadia",
      surname: "Begum",
      email: "begum_sadia@sadia.org",
      roomId: 1,
      checkInDate: "2018-02-15",
      checkOutDate: "2018-02-28"
    }
  ];

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr>
              <td scope="row">{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
