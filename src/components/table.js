import React from "react";
import moment from 'moment'
const dateDifference = (start, end) => {
    const startMoment = moment(start)
    const endMoment = moment(end)
    return endMoment.diff(startMoment, "days");
}

const TableHeader = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>First name</th>
      <th>Surname</th>
      <th>Email</th>
      <th>Roome ID</th>
      <th>Check in date</th>
      <th>Check out date</th>
      <th>Check out date</th>
    </tr>
  </thead>
);
const TableRow = ({
  id,
  title,
  firstName,
  surname,
  email,
  roomId,
  checkInDate,
  checkOutDate
}) => (
  <tbody>
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{dateDifference(checkInDate, checkOutDate)}</td>
    </tr>
  </tbody>
);
export { TableHeader, TableRow };
