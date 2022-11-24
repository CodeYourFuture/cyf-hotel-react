import React, { useState } from "react";
import moment from "moment";
import "./App.css";

const SearchResults = props => {
  return (
    <table className="table table-light">
      <thead class="thead-light">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.bkings.map((val, key) => (
          <Row key={key} val={val} />
        ))}
      </tbody>
    </table>
  );
};

const Row = ({ val, key }) => {
  const [highlight, setHighlight] = useState(null);

  function handle() {
    console.log("selected");
    if (highlight == null) {
      setHighlight("pink");
    } else setHighlight(null);
  }

  return (
    <tr onClick={handle} className={highlight} key={key}>
      <th key={key} scope="row">
        {val.id}
      </th>
      <td key={key}>{val.title}</td>
      <td>{val.firstName}</td>
      <td>{val.surname}</td>
      <td>{val.email}</td>
      <td>{val.roomId}</td>
      <td>{val.checkInDate}</td>
      <td>{val.checkOutDate}</td>
      <td>{moment(val.checkOutDate).diff(val.checkInDate, "days")}</td>
    </tr>
  );
};

export default SearchResults;
