import React from "react";

function SearchResults() {
  const bookings = [
    {
      id: "001",
      title: "Mr",
      firstname: "John",
      surname: "Doe",
      email: "john@doe.com",
      roomid: "123",
      checkindate: "12/12/12",
      checkoutdate: "13/13/13"
    },
    {
      id: "002",
      title: "Mrs",
      firstname: "Angel",
      surname: "Morningstar",
      email: "angel@morningstar.com",
      roomid: "124",
      checkindate: "14/12/12",
      checkoutdate: "15/13/13"
    }
  ];

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map(booking => (
          <tr>
            <td>{booking.title}</td>
            <td>{booking.firstname}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomid}</td>
            <td>{booking.checkindate}</td>
            <td>{booking.checkoutdate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
