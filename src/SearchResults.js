import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResult = props => {
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
          return <ResultRow data={data} />;
        })}
      </tbody>
    </table>
  );
};

function ResultRow({ data }) {
  const [highlighted, setHighlighted] = useState("white");
  function Highlighter() {
    if (highlighted === "white") {
      setHighlighted("grey");
    } else {
      setHighlighted("white");
    }
  }
  let a = moment(data.checkInDate);
  let b = moment(data.checkOutDate);
  let numOfNights = b.diff(a, "days");
  return (
    <tr
      onClick={() => {
        Highlighter(highlighted);
      }}
      style={{ backgroundColor: highlighted }}
    >
      <td>{data.title}</td>
      <td>{data.firstName}</td>
      <td>{data.surname}</td>
      <td>{data.email}</td>
      <td>{data.roomId}</td>
      <td>{data.checkInDate}</td>
      <td>{data.checkOutDate}</td>
      <td>{numOfNights}</td>
      <CustomerProfile />
    </tr>
  );
}

export default SearchResult;
