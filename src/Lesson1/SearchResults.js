import React, { useState } from "react";
import Moment from "moment";

let checkDiff = (InDate, OutDate) => {
  const checkInDate = Moment(InDate, "YYYY-MM-DD");
  const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
  const diff = checkOutDate.diff(checkInDate, "days");
  return diff;
};

export default function SearchResult({ results }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">FirstName</th>
            <th scope="col">Surname</th>
            <th scope="col">email</th>
            <th scope="col">roomId</th>
            <th scope="col">checkInDate</th>
            <th scope="col">checkOutDate</th>
            <th scope="col">number of nights</th>
            <th scope="col">profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => {
            const [color, setColor] = useState(false);
            function changeColor() {
              setColor(!color);
            }
            return (
              <tr
                key={index}
                style={{ backgroundColor: color ? "yellow" : "white" }}
                onClick={changeColor}
              >
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>{checkDiff(item.checkInDate, item.checkOutDate)}</td>
                <td>
                  <button>show profile</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
