import React from "react";
import Thead from "./Thead.js";
import moment from "moment";
// import Tbody from './Tbody.js';

function SearchResults(props) {
  console.log(props);
  return (
    <div className="table-container">
      <table className="table table-bordered table-hover">
        <Thead />
        <tbody className="text-center">
          {props.results.map(detail => (
            <tr>
              <td key={detail.title}>{detail.title}</td>
              <td key={detail.firstName}>{detail.firstName}</td>
              <td key={detail.surname}>{detail.surname}</td>
              <td key={detail.email}>{detail.email}</td>
              <td key={detail.id}>{detail.id}</td>
              <td key={detail.checkInDate}>{detail.checkInDate}</td>
              <td key={detail.checkOutDate}>{detail.checkOutDate}</td>
              <td key={detail}>
                {moment(detail.checkOutDate, "YYYY/MM/DD").diff(
                  moment(detail.checkInDate, "YYYY/MM/DD"),
                  "days"
                )}{" "}
                night(s)
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
