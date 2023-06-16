import React, {useState} from "react";

const BookingRow = ({ booking }) => {
  const { id, title, firstName, surname, email, roomId, checkInDate, checkOutDate } = booking;
const [selected, setSelected] = useState(false);

const handleRowClick = () => {
   setSelected(!selected);
};

const rowClassName = selected ? "selected" : ""; 

  return (
    <tr className={rowClassName} onClick={handleRowClick}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
    </tr>
  );
};

const SearchResults = ({ results }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check-in Date</th>
          <th>Check-out Date</th>
        </tr>
      </thead>
      <tbody>
        {results.map(booking => (
          <BookingRow key={booking.id} booking={booking} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;