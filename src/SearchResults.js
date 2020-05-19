import React from "react";
import { Table } from "reactstrap";

const SearchResults = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Room id</th>
          <th>Check in date</th>
          <th>Check out date</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((element, index) => {
          return (
            <tr key={index}>
              <th scope="row">{element.title}</th>
              <td>{element.firstName}</td>
              <td>{element.surname}</td>
              <td>{element.email}</td>
              <td>{element.roomId}</td>
              <td>{element.checkInDate}</td>
              <td>{element.checkOutDate}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SearchResults;
