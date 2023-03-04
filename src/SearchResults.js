import moment from "moment";
import React, { useState } from "react";

const SearchResults = props => {
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handlerRowClick = id => {
    id === selectedRowId ? setSelectedRowId(null) : setSelectedRowId(id);
  };
  const { bookings } = props;
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
        {bookings.map(booking => (
          <tr
            key={booking.id}
            onClick={() => handlerRowClick(booking.id)}
            style={{
              backgroundColor: selectedRowId === booking.id ? "red" : "white"
            }}
          >
            <td>{booking.id}</td>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
            <td>
              {moment(booking.checkOutDate).diff(booking.checkInDate, "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
