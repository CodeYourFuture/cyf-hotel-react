import React from "react";
import moment from "moment";

const SearchResults = () => {
  // Example booking data
  const bookings = [
    {
      id: 1,
      title: "Mr",
      firstName: "person1",
      surname: "else",
      email: "johndoe@example.com",
      roomId: 101,
      checkInDate: "2023-03-10",
      checkOutDate: "2023-03-15",
    },
    {
      id: 2,
      title: "Ms",
      firstName: "person2",
      surname: "else",
      email: "janedoe@example.com",
      roomId: 102,
      checkInDate: "2023-03-12",
      checkOutDate: "2023-03-14",
    },
    {
      id: 3,
      title: "Mr",
      firstName: "person3",
      surname: "else",
      email: "johndoe@example.com",
      roomId: 103,
      checkInDate: "2023-05-20",
      checkOutDate: "2023-06-15",
    },
    {
      id: 4,
      title: "Mr",
      firstName: "person4",
      surname: "else",
      email: "johndoe@example.com",
      roomId: 104,
      checkInDate: "2023-03-10",
      checkOutDate: "2023-03-15",
    },
    {
      id: 5,
      title: "Mrs",
      firstName: "person5",
      surname: "else",
      email: "johndoe@example.com",
      roomId: 105,
      checkInDate: "2023-04-09",
      checkOutDate: "2023-04-15",
    },
];

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>Nights</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => {
            const checkIn = moment(booking.checkInDate);
            const checkOut = moment(booking.checkOutDate);
            const nights = checkOut.diff(checkIn, "days");
            return (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{nights}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
