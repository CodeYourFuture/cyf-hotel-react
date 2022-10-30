import React from "react";
import TableRow from "./TableRow";
// import moment from "moment";

const SearchResults = props => {
  const tableHeadings = Object.keys(props.results[0]);
  return (
    <table>
      <caption className="Caption">Hotel Bookings</caption>
      <thead>
        <tr>
          {tableHeadings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
          <th>nightsNumbers</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, index) => {
          return <TableRow key={index} booking={booking} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
