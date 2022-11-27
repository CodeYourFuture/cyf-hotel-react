import React, { useState } from "react";
import moment from "moment";

const SearchResult = props => {
  const [color, setColor] = useState("red");
  function Highlighter() {
    setColor("purple");
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check-in date</th>
          <th scope="col">Check-out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((data, index) => {
          let a = moment(data.checkInDate);
          let b = moment(data.checkOutDate);
          let numOfNights = b.diff(a, "days");
          return (
            <tr key={index}>
              <th scope="row" key={index}>
                {data.title}
              </th>
              <td>{data.firstName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>{data.roomId}</td>
              <td>{data.checkInDate}</td>
              <td>{data.checkOutDate}</td>
              <td>{numOfNights}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResult;
