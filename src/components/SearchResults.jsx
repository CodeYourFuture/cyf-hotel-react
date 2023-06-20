import React from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
          <th scope="col">nights</th>
        </tr>
      </thead>

      <tbody>
        {results.map((item, index) => {
          const dateIn = moment(item.checkInDate);
          const dateOut = moment(item.checkOutDate);
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>{dateOut.diff(dateIn, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
