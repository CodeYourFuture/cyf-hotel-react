import React from "react";
import moment from "moment";
const SearchResults = props => {
  return (
    <table className="table  results">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of Night</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(item => {
          const startDate = moment(item.checkInDate);
          const endDate = moment(item.checkOutDate);
          let numberOfNights = endDate.diff(startDate, "days", true);

          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>{numberOfNights} </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
