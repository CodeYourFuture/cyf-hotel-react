import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table className="table thead-dark table-bordered">
      <thead className=" thead-dark ">
        <tr>
          {props.table.map((element, index) => (
            <th key={index} scope="col">
              {element}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.results.map(element => (
          <tr key={element.id + 10}>
            <td key={element.id + 1}>{element.id}</td>
            <td key={element.id + 2}>{element.title}</td>
            <td key={element.id + 3}>{element.firstName}</td>
            <td key={element.id + 4}>{element.sureName}</td>
            <td key={element.id + 5}>{element.email}</td>
            <td key={element.id + 6}>{element.roomId}</td>
            <td key={element.id + 7}>{element.checkInDate}</td>
            <td key={element.id + 8}>{element.checkOutDate}</td>
            <td key={element.id + 9}>
              {moment(element.checkOutDate, "YYYY/MM/DD").diff(
                moment(element.checkInDate, "YYYY/MM/DD"),
                "days"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SearchResults;
