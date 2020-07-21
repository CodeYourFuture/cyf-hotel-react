import React from "react";
import moment from "moment";
import Table from "react-bootstrap/Table";

const SearchResults = ({ results }) => {
  return (
    <Table className="table">
      <thead>
        <tr>
          {Object.keys(results[0]).map((customer, i) => {
            return <th key={i}>{customer}</th>;
          })}

          <th>Num Nights</th>
        </tr>
      </thead>
      {results.map(customer => {
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
