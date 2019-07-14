import React from 'react';
import moment from 'moment';

const SearchResults = props => {
  const bookingData = props.results;
  console.log(bookingData);
  var tableData = bookingData.map(b => {
    return (
      <tr>
        <td>#</td>
        <td>{b.id}</td>
        <td>{b.title}</td>
        <td>{b.firstName}</td>
        <td>{b.surname}</td>
        <td>{b.email}</td>
        <td>{b.roomId}</td>
        <td>{b.checkInDate}</td>
        <td>{b.checkOutDate}</td>
        <td>{moment(b.checkOutDate).diff(moment(b.checkInDate), 'days')}</td>
      </tr>
    );
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Stay (Days)</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
};
export default SearchResults;
