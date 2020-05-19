import React from "react";
import { Table } from "reactstrap";
import moment from "moment";

const SearchResults = props => {
  return (
    <Table>
      <thead>
        <tr className="col-12">
          <th className="mx-auto">Title</th>
          <th className="mx-auto">First Name</th>
          <th className="mx-auto pl-2">Last Name</th>
          <th className="mx-auto pr-3">Email</th>
          <th className="mx-auto pl-1 pr-5">Room id</th>
          <th className="mx-auto pl-2">Check in date</th>
          <th className="mx-auto pl-2">Check out date</th>
          <th className="mx-auto pl-2">Nights</th>
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
              <td>
                {" "}
                {moment(element.checkOutDate).diff(
                  moment(element.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SearchResults;
