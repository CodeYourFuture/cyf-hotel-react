import React, { useState } from "react";
import moment from "moment";

const CalculateNumberOfNights = (inDate, outDate) => {
  let a = moment(inDate);
  let b = moment(outDate);
  return b.diff(a, "days");
};

function SearchResults(props) {
  return (
    <div className="tableResult">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Room</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">Total Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(e => {
            return <TableRow data={e} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

function TableRow(props) {
  const [selected, setSelected] = useState(false);

  return (
    <tr
      onClick={() => {
        setSelected(!selected);
      }}
      className={selected ? "selected" : ""}
    >
      <th scope="row">{props.data.id}</th>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
      <td>
        {CalculateNumberOfNights(
          props.data.checkInDate,
          props.data.checkOutDate
        )}
      </td>
    </tr>
  );
}

export default SearchResults;
