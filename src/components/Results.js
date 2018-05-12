import React from "react";
const Results = prop => {
  return (
    <table className="results">
      <thead>
        <tr>
          <th>Title </th>
          <th>First name </th>
          <th>Surname </th>
          <th>Email</th>
          <th>Room ID </th>
          <th>Check in date </th>
          <th>Check out date </th>
        </tr>
      </thead>
      {prop.results.map(result => (
        <tbody>
          <tr>
            <td>{result.title} </td>
            <td>{result.firstName} </td>
            <td>{result.surname} </td>
            <td>{result.email} </td>
            <td>{result.roomId} </td>
            <td>{result.checkInDate} </td>
            <td>{result.checkOutDate} </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default Results;
