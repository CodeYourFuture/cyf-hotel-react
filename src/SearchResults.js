import moment from "moment";
import React from "react";

const SearchResults = props => {
  return (
    <table className="table table-striped table-bordered table-sm">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email Address</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Number Of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((info, index) => (
          <tr key={index}>
            <td scope="row">{info.id}</td>
            <td scope="row">{info.title}</td>
            <td scope="row">{info.firstName}</td>
            <td scope="row">{info.surname}</td>
            <td scope="row">{info.email}</td>
            <td scope="row">{info.roomId}</td>
            <td scope="row">{info.checkInDate}</td>
            <td scope="row">{info.checkOutDate}</td>
            <td>
              {moment(info.checkOutDate).diff(moment(info.checkInDate), "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
