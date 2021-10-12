import React from "react";

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
        </tr>
      </thead>
      <tbody>
        {props.FakeInfo.map((info, i) => (
          <tr key={i}>
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
}

export default SearchResults;
