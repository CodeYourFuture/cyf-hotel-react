import React from "react";
import HighlightRow from "./HighlightRow";

const SearchResults = props => {
  const headings = [
    `Id`,
    `Title`,
    `First Name`,
    `Surname`,
    `Email`,
    `Room Id`,
    `Check In Date`,
    `Check Out Date`,
    `Number Of Nights`
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          {headings.map((heading, i) => (
            <th key={i} scope="col">
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.bookings.map((booking, i) => {
          return <HighlightRow booking={booking} key={i} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
