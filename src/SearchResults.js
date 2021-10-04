import React from "react";
import moment from "moment";

const SearchResults = prop => {
  const customer = prop.results;
  return (
    <table className="table table-responsive-lg table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">RoomId</th>
          <th scope="col">CheckInDate</th>
          <th scope="col">CheckOutDate</th>
          <th scope="col">Nights Stay</th>
        </tr>
      </thead>
      <tbody>
        {customer.map((customer, index) => {
          let checkInDate = moment(customer.checkInDate);

          let checkOutDate = moment(customer.checkOutDate);

          let nightStay = checkOutDate.diff(checkInDate, "days");

          return (
            <tr key={index}>
              <td>{customer.id}</td>
              <td>{customer.title}</td>
              <td>{customer.firstName}</td>
              <td>{customer.surname}</td>
              <td> {customer.email} </td>
              <td>{customer.roomId}</td>
              <td>{customer.checkInDate}</td>
              <td>{customer.checkOutDate}</td>
              <td>{nightStay}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
