import React from 'react';

// Calculate number of days between two dates (in string).
function daysBetweenDates(dateStr1, dateStr2) {
  const date1 = new Date(dateStr1);
  const date2 = new Date(dateStr2);
  
  const diffSeconds = date2 - date1;
  const diffDays = Math.round(diffSeconds / (1000 * 60 * 60 * 24));
  return diffDays;
}

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
        <th>No. of days</th>
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
          <td>{ daysBetweenDates(result.checkInDate, result.checkOutDate) }</td>
        </tr>
      )}
    </tbody>
  </table>;

export default Results;

