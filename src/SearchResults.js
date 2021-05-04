import React, { useState } from "react";
import moment from "moment";
import TableInfo from "./TableInfo.js";
import CustomerProfile from "./CustomerProfile.js";

const SearchResults = props => {
  const [keys, setKeys] = useState([]);
  const [customerId, setSelectedustomerId] = useState(null);

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
    <div>
      <table className="table">
        <TableInfo />
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
                <button onClick={() => setSelectedustomerId(result.id)}>
                  Show profile
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
};
export default SearchResults;
