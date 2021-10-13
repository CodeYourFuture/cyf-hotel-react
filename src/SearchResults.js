import React from "react";
import moment from "moment";

function SearchResults(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.FakeBookings.map((info, i) => (
          <tr key={i}>
            <td>{info.id}</td>
            <td>{info.title}</td>
            <td>{info.firstName}</td>
            <td>{info.surname}</td>
            <td>{info.email}</td>
            <td>{info.roomId}</td>
            <td>{info.checkInDate}</td>
            <td>{info.checkOutDate}</td>
            <td>
              {moment(info.checkOutDate).diff(moment(info.checkInDate), "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
