import React from "react";
const SortedBooking = props => {
  const sortedArray = props.array.sort((a, b) => {
    if (props.column === "id") {
      return a.id - b.id;
    } else if (props.column === "title") {
      return a.title.localCompare(b.title);
    } else if (props.column === "firstName") {
      return a.firstName.localeCompare(b.firstName);
    } else if (props.column === "surname") {
      return a.surname.localeCompare(b.surname);
    } else if (props.column === "email") {
      return a.email.localeCompare(b.email);
    } else if (props.column === "roomId") {
      return a.roomId - b.roomId;
    } else if (props.column === "checkInDate") {
      return new Date(a.checkInDate) - new Date(b.checkInDate);
    } else if (props.column === "checkOutDate") {
      return new Date(a.checkOutDate) - new Date(b.checkOutDate);
    } else if (props.column === "stay") {
      return (
        new Date(a.checkOutDate) -
        new Date(a.checkInDate) -
        (new Date(b.checkOutDate) - new Date(b.checkInDate))
      );
    } else {
      return 0;
    }
  });
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check in Date</th>
          <th>Check out Date</th>
          <th>Nights of Stay</th>
        </tr>
      </thead>
      <tbody>
        {sortedArray.map(booking => (
          <tr key={booking.id}>
            <td>{booking.id}</td>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>
              {(
                new Date(booking.checkOutDate) - new Date(booking.checkInDate)
              ).toString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SortedBooking;
