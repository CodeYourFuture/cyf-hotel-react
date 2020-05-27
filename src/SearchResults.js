import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.result.map(data => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.firstName}</td>
            <td>{data.surname}</td>
            <td>{data.email}</td>
            <td>{data.roomId}</td>
            <td>{data.checkInDate}</td>
            <td>{data.checkOutDate}</td>
            <td>{daysDifference(data.checkOutDate, data.checkInDate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function daysDifference(start, end) {
  const duration = moment.duration(moment(start).diff(moment(end))).asDays();
  return Math.round(duration);
}

export default SearchResults;
