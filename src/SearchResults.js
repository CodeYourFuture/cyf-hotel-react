import React, { useState } from "react";
import Thead from "./Thead.js";
import moment from "moment";
// import Tbody from './Tbody.js';

function SearchResults(props) {
  const [highlightRow, setHighlightRow] = useState(false);
  function highlightRowHandler(index) {
    if (index === highlightRow) {
      setHighlightRow(false);
    } else {
      setHighlightRow(index);
    }
  }

  return (
    <div className="table-container">
      <table className="table table-bordered table-hover">
        <Thead />
        <tbody className="text-center">
          {props.results.map((detail, index) => (
            <tr
              className={highlightRow === index ? "highlight" : ""}
              onClick={() => highlightRowHandler(index)}
            >
              <td key={index + 1}>{detail.title}</td>
              <td key={index + 2}>{detail.firstName}</td>
              <td key={index + 3}>{detail.surname}</td>
              <td key={index + 4}>{detail.email}</td>
              <td key={index + 5}>{detail.id}</td>
              <td key={index + 6}>{detail.checkInDate}</td>
              <td key={index + 7}>{detail.checkOutDate}</td>
              <td key={index + 8}>
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
