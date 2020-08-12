import React from "react";
import moment from "moment";

const SearchResults = props => {
  let selectedTd;

  function highlightWhenClicked(event) {
    selectedTd = event.target;
    if (selectedTd.parentNode.className === "bookings highlight") {
      selectedTd.parentNode.classList.remove("highlight");
      return;
    }
    selectedTd.parentNode.classList.add("highlight");
  }

  return (
    <table className="table">
      <thead>
        <tr>
          {Object.keys(props.results[0]).map(function(key) {
            return (
              <th key={(-Math.random() * 10000000000).toString()} scope="col">
                {key}
              </th>
            );
          })}
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => {
          return (
            <tr
              className="bookings"
              onClick={highlightWhenClicked}
              key={(Math.random() / 10000000000).toString()}
            >
              {Object.keys(result).map(function(key) {
                return (
                  <td key={(Math.random() * 10000000000).toString()}>
                    {result[key]}
                  </td>
                );
              })}
              <td>{NumberNights(result)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

function NumberNights(result) {
  let checkIn = moment(result.checkInDate);
  let checkOut = moment(result.checkOutDate);

  return checkOut.diff(checkIn, "days");
}

export default SearchResults;
