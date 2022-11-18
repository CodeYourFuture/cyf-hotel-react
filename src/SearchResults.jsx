import React from "react";
import Table from "react-bootstrap/Table";
import moment from "moment";

function SearchResults(props) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>first name</th>
            <th>surname</th>
            <th>email</th>
            <th>room id</th>
            <th>check in date</th>
            <th>check out date</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(inf => {
            return (
              <tr>
                <td>{inf.id}</td>
                <td>{inf.title}</td>
                <td>{inf.firstName}</td>
                <td>{inf.surname}</td>
                <td>{inf.email}</td>
                <td>{inf.roomId}</td>
                <td>{inf.checkInDate}</td>
                <td>{inf.checkOutDate}</td>
                <td>
                  {moment(inf.checkOutDate).diff(
                    moment(inf.checkInDate),
                    "days"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default SearchResults;
