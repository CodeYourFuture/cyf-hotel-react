import React, { useState } from "react";
import moment from "moment";

function SearchResults({ results }) {
  const [isClicked, setIsClicked] = useState(false);

  function highlighter() {
    setIsClicked(!isClicked);
  }

  return (
    <tr
      key={results.id}
      className={isClicked ? "row-highlight table-row" : "table-row"}
      onClick={highlighter}
    >
      <th scope="row">{results.id}</th>
      <td>{results.firstName}</td>
      <td>{results.surname}</td>
      <td>{results.email}</td>
      <td>{results.roomId}</td>
      <td>{results.checkInDate}</td>
      <td>{results.checkOutDate}</td>
      <td>
        {moment(results.checkOutDate).diff(moment(results.checkInDate), "days")}
      </td>
    </tr>
  );
}

export default SearchResults;
