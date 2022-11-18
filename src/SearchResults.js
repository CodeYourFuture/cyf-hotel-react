import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table className="table table-striped">
      <thead class="thead-light">
        <tr>
          <th scope="col">Id</th>
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
        {props.bookings.map((val, key) => {
          return (
            <tr key={key}>
              <th scope="row">{val.id}</th>
              <td>{val.title}</td>
              <td>{val.firstName}</td>
              <td>{val.surname}</td>
              <td>{val.email}</td>
              <td>{val.roomId}</td>
              <td>{val.checkInDate}</td>
              <td>{val.checkOutDate}</td>
              <td>{moment(val.checkOutDate).diff(val.checkInDate, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
