import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">staying</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => {
          const {
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOutDate
          } = result;
          var a = moment(checkOutDate);
          var b = moment(checkInDate);
          return (
            <tr key={id}>
              <th scope="row">{title}</th>
              <td>{firstName}</td>
              <td>{surname}</td>
              <td>{email}</td>
              <td>{roomId}</td>
              <td>{checkInDate}</td>
              <td>{checkOutDate}</td>
              <td>
                {title} {firstName} has a booking for {a.diff(b, "days")} nights
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
