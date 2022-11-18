import React from "react";
import Table from "react-bootstrap/Table";
import moment from "moment";

function SearchResults(props) {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room Id</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Booking Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(dt => {
            return (
              <tr>
                <td>{dt.id}</td>
                <td>{dt.title}</td>
                <td>{dt.firstName}</td>
                <td>{dt.surname}</td>
                <td>{dt.email}</td>
                <td>{dt.roomId}</td>
                <td>{dt.checkInDate}</td>
                <td>{dt.checkOutDate}</td>
                <td>{moment(dt.checkOutDate).diff(dt.checkInDate, "days")}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default SearchResults;
