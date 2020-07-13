import React from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">E-mail</th>
          <th scope="col">Room No</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
          <th scope="col">Numer of Nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((props, index) => {
          return (
            <tr key={index}>
              <td>{props.id}</td>
              <td>{props.title}</td>
              <td>{props.firstName}</td>
              <td>{props.surname}</td>
              <td>{props.email}</td>
              <td>{props.roomId}</td>
              <td>{props.checkInDate}</td>
              <td>{props.checkOutDate}</td>
              <td>
                {moment(props.checkOutDate).diff(props.checkInDate, "days")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
