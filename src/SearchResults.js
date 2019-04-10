import React from "react";
// import FakeBookings from "./data/fakeBookings.json";

const SearchResults = (props, customersDetails) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">TITLE</th>
          <th scope="col">FIRST NAME</th>

          <th scope="col">SURNAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">ROOM ID</th>

          <th scope="col">CHECK IN DATE</th>
          <th scope="col">CHECK OUT DATE</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((customer, index) => {
          //   console.log(customer);
          return (
            <tr key={index}>
              <td>{customer.id}</td>
              <td>{customer.title}</td>
              <td>{customer.firstName}</td>
              <td>{customer.surname}</td>
              <td>{customer.email}</td>
              <td>{customer.roomId}</td>
              <td>{customer.checkInDate}</td>
              <td>{customer.checkOutDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
