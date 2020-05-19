import React from "react";
import { Table } from "reactstrap";
import moment from "moment";

const SearchResults = props => {
  return (
    <Table className="table col-12">
      <thead>
        <tr>
          <th className="mx-auto bg-danger text-white">Title</th>
          <th className="mx-auto bg-dark text-white">First Name</th>
          <th className="mx-auto bg-danger text-white pl-2">Last Name</th>
          <th className="mx-auto bg-dark text-white pr-3">Email</th>
          <th className="mx-auto bg-danger text-white pl-1 pr-5">Room id</th>
          <th className="mx-auto bg-dark text-white pl-2">Check in date</th>
          <th className="mx-auto bg-danger text-white pl-2">Check out date</th>
          <th className="mx-auto bg-dark text-white pl-2">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((element, index) => {
          return (
            <tr key={index}>
              <th scope="row" className="bg-dark text-white">
                {element.title}
              </th>
              <td className="bg-danger text-white">{element.firstName}</td>
              <td className="bg-dark text-white">{element.surname}</td>
              <td className="bg-danger text-white">{element.email}</td>
              <td className="bg-dark text-white">{element.roomId}</td>
              <td className="bg-danger text-white">{element.checkInDate}</td>
              <td className="bg-dark text-white">{element.checkOutDate}</td>
              <td className="bg-danger text-white">
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
