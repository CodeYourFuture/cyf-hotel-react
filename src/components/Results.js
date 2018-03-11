import React from "react";
import moment from "moment";

const Results = ({FakeBookings}) => (
  <div>
    <table className="table search-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Firstname </th>
          <th>Surname</th>
          <th>Email</th>
          
          <th>Room ID</th>
          <th>check in date</th>
          <th>check out date</th>
          <th>Total DaysIN</th>
        </tr>
      </thead>

      <tbody>
        {
      FakeBookings.map(data => 
          <tr>
            <td>{data.title}</td>
            <td>{data.firstName}</td>
            <td>{data.surname}</td>
            <td>{data.email}</td>
          
            <td>{data.roomId}</td>
            <td>{data.checkInDate}</td>
            <td>{data.checkOutDate}</td>
            <td>{moment(data.checkOutDate).diff(data.checkInDate, 'days')}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);
export default Results;
