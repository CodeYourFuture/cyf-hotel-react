import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [rowArray, setRowArray] = useState([]);

  const addToArray = event => {
    const rowId = event.currentTarget.id;
    if (!rowArray.includes(rowId)) {
      setRowArray(previousValue => previousValue.concat(rowId));
      event.currentTarget.className = "skyBlue";
    }

    if (rowArray.includes(rowId)) {
      event.currentTarget.className = "";
      setRowArray(previousValue => {
        previousValue.splice(previousValue.indexOf(rowId), 1);
        return previousValue;
      });
    }
  };

  console.log(rowArray);

  const rowData = props.results.map(element => {
    return (
      <tr className="" onClick={addToArray} id={`${element.id}`}>
        <td>{element.id}</td>
        <td>{element.title}</td>
        <td>{element.firstName}</td>
        <td>{element.surname}</td>
        <td>{element.email}</td>
        <td>{element.roomId}</td>
        <td>{element.checkInDate}</td>
        <td>{element.checkOutDate}</td>
        <td>
          {moment(element.checkOutDate).diff(
            moment(element.checkInDate),
            "days"
          )}
        </td>
      </tr>
    );
  });

  return (
    <table id="john">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check-in-date</th>
          <th scope="col">Check-out-date</th>
          <th scope="col">Number of Nights</th>
        </tr>
      </thead>
      <tbody>{rowData}</tbody>
    </table>
  );
};

export default SearchResults;
