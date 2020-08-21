import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import moment from "moment";

const SearchResults = props => {
  let selectedTd;

  let [currentId, setCurrentId] = useState("");

  function highlightWhenClicked(event) {
    selectedTd = event.target;
    console.log(selectedTd.className);
    if (selectedTd.parentNode.className.includes("bookings highlight")) {
      selectedTd.parentNode.classList.remove("highlight");
      return;
    }
    selectedTd.parentNode.classList.add("highlight");
  }

  function handleShowProfile(event) {
    /*   currentId = event.target.id;
    console.log(currentId); */
    setCurrentId(event.target.id);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Profile</th>
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
                key={(Math.random() / 10000000000).toString()} //here was onClick
              >
                <td>
                  <button id={result.id} onClick={handleShowProfile}>
                    Show profile
                  </button>
                </td>
                {Object.keys(result).map(function(key, index) {
                  return (
                    <td
                      key={(Math.random() * 10000000000).toString()}
                      onClick={highlightWhenClicked}
                      className={index} //replaced from line 44
                    >
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

      {currentId ? <CustomerProfile id={currentId} /> : null}
    </div>
  );
};

function NumberNights(result) {
  let checkIn = moment(result.checkInDate);
  let checkOut = moment(result.checkOutDate);

  return checkOut.diff(checkIn, "days");
}

export default SearchResults;
