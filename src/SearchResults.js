import React from "react";
import moment from "moment";
import Table from "react-bootstrap/Table";

const SearchResults = props => {
  return (
    <Table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">email</th>
          <th scope="col">RoomId</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">Number of Nights</th>
        </tr>
      </thead>
      {props.results.map(customer => {
        return (
          <tr>
            <td key={customer.id.toString()}>{customer.id}</td>
            <td>{customer.title}</td>
            <td>{customer.firstName}</td>
            <td>{customer.surname}</td>
            <td>{customer.email}</td>
            <td>{customer.roomId}</td>
            <td>{customer.checkInDate}</td>
            <td>{customer.checkOutDate}</td>
            <td>
              {moment(customer.checkOutDate).diff(customer.checkInDate, "days")}
            </td>
          </tr>
        );
      })}
    </Table>
  );
};

export default SearchResults;
