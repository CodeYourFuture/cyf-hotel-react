import React from "react";
import Thead from "./Thead.js";
import moment from "moment";
// import Tbody from './Tbody.js';

function SearchResults(props) {
  return (
    <div className="table-container">
      <table className="table table-bordered table-hover">
        <Thead />
        <tbody className="text-center">
          {props.results.map((detail, index) => (
            <tr>
              <td key={index}>{detail.title}</td>
              <td key={index}>{detail.firstName}</td>
              <td key={index}>{detail.surname}</td>
              <td key={index}>{detail.email}</td>
              <td key={index}>{detail.id}</td>
              <td key={index}>{detail.checkInDate}</td>
              <td key={index}>{detail.checkOutDate}</td>
              <td key={index}>
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
