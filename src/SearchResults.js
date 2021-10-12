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
        {props.tableInfo.map((body, i) => (
          <tr key={i}>
            <th scope="row">{body.id}</th>
            <th scope="row">{body.title}</th>
            <th scope="row">{body.firstName}</th>
            <th scope="row">{body.surName}</th>
            <th scope="row">{body.email}</th>
            <th scope="row">{body.roomId}</th>
            <th scope="row">{body.checkin}</th>
            <th scope="row">{body.checkout}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
