import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [keys, setKeys] = useState([]);

  function handlerOnClick(key) {
    let newKeys = keys.slice(); // create an array newKeys which is a *copy* of keys - we are not allowed to edit keys directly,
    // only replace it with a new value via the setKeys function
    if (!newKeys.includes(key)) {
      // if the key isn't already in the keys
      newKeys.push(key); // add it to newKeys
    } else {
      newKeys = newKeys.filter(index => index !== key); // remove the key from newKeys by filtering it out and assign the filtered array to newKeys
    }
    setKeys(newKeys); // update the state to hold the value of newKeys in place of keys
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">email</th>
          <th scope="col">room</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, key) => {
          return (
            <tr
              onClick={() => handlerOnClick(key)}
              className={keys.includes(key) ? "HighlightedRow" : ""}
              key={key}
            >
              <th scope="row"> {result.id}</th>
              <td> {result.title} </td>
              <td> {result.firstName} </td>
              <td> {result.surname} </td>
              <td> {result.email} </td>
              <td> {result.roomId} </td>
              <td> {result.checkInDate} </td>
              <td> {result.checkOutDate} </td>
              <td>
                {moment(result.checkOutDate).diff(
                  moment(result.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
