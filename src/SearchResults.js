import React, { useState } from "react";
import moment from "moment";

function SearchResults({ results, changeButtonId }) {
  const [isClicked, setIsClicked] = useState(false);

  function highlighter() {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <tr
        // key={results.id}
        className={isClicked ? "row-highlight table-row" : "table-row"}
        onClick={highlighter}
        id={results.id}
      >
        <th scope="row">{results.id}</th>
        <td>{results.firstName}</td>
        <td>{results.surname}</td>
        <td>{results.email}</td>
        <td>{results.roomId}</td>
        <td>{results.checkInDate}</td>
        <td>{results.checkOutDate}</td>
        <td>
          {moment(results.checkOutDate).diff(
            moment(results.checkInDate),
            "days"
          )}
        </td>
        <td>
          <button id={results.id} onClick={changeButtonId}>
            Show Profile
          </button>
        </td>
      </tr>
    </>
  );
}

export default SearchResults;
