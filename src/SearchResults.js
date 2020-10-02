import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  const [clicked, setState] = useState(false);

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first Name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">Number of booked nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((el, index) => (
          <tr
            onClick={() => setState(true)}
            className={clicked ? "bg-primary" : "null"}
          >
            <th scope="row">{el.id}</th>
            <td>{el.title}</td>
            <td>{el.firstName}</td>
            <td>{el.surname}</td>
            <td>{el.email}</td>
            <td>{el.roomId}</td>
            <td>{el.checkInDate}</td>
            <td>{el.checkOutDate}</td>
            <td>
              {moment(el.checkOutDate).diff(moment(el.checkInDate), "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
