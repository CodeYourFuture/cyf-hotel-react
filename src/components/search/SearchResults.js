import React, { useState } from "react";
import HighlightRow from "./HighlightRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [id, setId] = useState(null);

  function handleButtonClick(clickedId) {
    setId(clickedId);
  }

  const headings = [
    `Id`,
    `Title`,
    `First Name`,
    `Surname`,
    `Email`,
    `Room Id`,
    `Check In Date`,
    `Check Out Date`,
    `Number Of Nights`,
    `Profile`
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      <table>
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
            return (
              <HighlightRow
                handleButtonClick={handleButtonClick}
                booking={booking}
                key={i}
              />
            );
          })}
        </tbody>
      </table>
      {id && <CustomerProfile id={id} />}
    </div>
  );
};

export default SearchResults;
