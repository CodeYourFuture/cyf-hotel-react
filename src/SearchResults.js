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
        </tr>
      </thead>
      <tbody>
        {props.results.map((info, index) => (
          <tr key={index}>
            <th scope="row">{info.id}</th>
            <th scope="row">{info.title}</th>
            <th scope="row">{info.firstName}</th>
            <th scope="row">{info.surname}</th>
            <th scope="row">{info.email}</th>
            <th scope="row">{info.roomId}</th>
            <th scope="row">{info.checkInDate}</th>
            <th scope="row">{info.checkOutDate}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
