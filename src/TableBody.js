import React from "react";

function stay(endDate, startDate) {
  const stay = new Date(endDate) - new Date(startDate);
  return Math.floor(stay / 86400000);
}

const TableBody = props => {
  return (
    <tbody>
      {props.bookingData.map(person => (
        <tr key={person.id}>
          <th>{person.id}</th>
          <td>{person.title}</td>
          <td>{person.firstName}</td>
          <td>{person.surname}</td>
          <td>{person.email}</td>
          <td>{person.roomId}</td>
          <td>{person.checkInDate}</td>
          <td>{person.checkOutDate}</td>
          <td>{stay(person.checkOutDate, person.checkInDate)}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
