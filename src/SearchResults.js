import React from "react";
import Moment from "moment";

const SearchResults = ({ results }) => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Title</th>
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room id</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
        <th scope="col">Qty of nights</th>
      </tr>
    </thead>
    <tbody>
      {results.map(
        (
          {
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOutDate
          },
          ind
        ) => (
          <tr key={ind}>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{firstName}</td>
            <td>{surname}</td>
            <td>{email}</td>
            <td>{roomId}</td>
            <td>{checkInDate}</td>
            <td>{checkOutDate}</td>
            <td>{Moment(checkOutDate).diff(Moment(checkInDate), "days")}</td>
          </tr>
        )
      )}
    </tbody>
  </table>
);

export default SearchResults;
