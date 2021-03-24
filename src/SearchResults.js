import moment from "moment";
import React, { useState } from "react";

const SearchResults = props => {
  const [inActive, setActive] = useState(-1);

  function colorChanger(index) {
    setActive(index === inActive ? -1 : index);
  }
  return (
    <table className="table mt-3 mb-2">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name </th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">No of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, index) => (
          <tr
            key={index}
            onClick={() => colorChanger(index)}
            className={inActive === index ? "selected" : ""}
            style={{ cursor: "pointer" }}
          >
            <td>{result.id}</td>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
            <td>
              {moment(result.checkOutDate).diff(result.checkInDate, "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
