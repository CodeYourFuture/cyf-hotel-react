import React from 'react';

const Results = ({ results }) => 
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>First name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Room id</th>
        <th>Check in date</th>
        <th>Check out date</th>
      </tr>
    </thead>
    <tbody>
      { results.map( (result, index) =>
        <tr key={ index }>
          <td>{ result.title }</td>
          <td>{ result.firstName }</td>
          <td>{ result.surname }</td>
          <td>{ result.email }</td>
          <td>{ result.roomId }</td>
          <td>{ result.checkInDate }</td>
          <td>{ result.checkOutDate }</td>
        </tr>
      )}
    </tbody>
  </table>;

export default Results;

