import React, { useState } from "react";
import moment from "moment";

const CalculateNumberOfNights = (inDate, outDate) => {
  let a = moment(inDate);
  let b = moment(outDate);
  return b.diff(a, "days");
};

const TableRow = ({
  title,
  firstName,
  surname,
  email,
  roomId,
  checkInDate,
  checkOutDate
}) => {
  const [selected, setSelected] = useState(false);
  const selectRow = () => setSelected(!selected);
  return (
    <tr onClick={selectRow} className={selected ? "selected" : ""}>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{CalculateNumberOfNights(checkInDate, checkOutDate)}</td>
    </tr>
  );
};

const SearchResults = ({ results }) => {
  return (
    <table className="table container">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check-Out Date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map(
          ({
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOutDate
          }) => {
            return (
              <TableRow
                key={id}
                title={title}
                firstName={firstName}
                surname={surname}
                email={email}
                roomId={roomId}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
              />
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
