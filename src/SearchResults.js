import React, { useState } from "react";

const SearchResults = props => {
  const moment = require("moment"); //adds moment library to file
  const results = props.results; //stores results prop

  const [highlight, setHighlight] = useState([]); //state for tr

  //highlights row using true false toggle
  const highlightRow = index => {
    if (highlight.includes(index)) {
      const filteredRow = highlight.filter(row => row !== index);
      setHighlight(filteredRow);
    } else {
      setHighlight([...highlight, index]);
    }

    console.log(highlight);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check-in date</th>
          <th scope="col">Check-out date</th>
          <th scope="col">Total Nights</th>
        </tr>
      </thead>
      <tbody>
        {/* Map through results/FakeBookings json, render tr with child tdx8 elems for each guest */}

        {/* CLASSNAME CHANGES FOR ALL ROWS WHEN ANY ROW IS CLICKED. POSSIBLE COS OF CLASSNAME={HIGHLIGHT} ONCLICK SEEMS TO BE OK */}
        {results.map((result, index) => (
          //adds unique key to each tr elem
          <tr
            key={index}
            onClick={() => highlightRow(index)}
            className={highlight.includes(index) ? "highlight" : ""}
          >
            <td>{result.id}</td>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
            <td>
              {moment(result.checkOutDate).diff(
                moment(result.checkInDate),
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
