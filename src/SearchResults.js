import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [select, setSelect] = useState("bg-info");

  function handleClick(e) {
    if (!e.target.parentElement.className) {
      setSelect("bg-info");
      e.target.parentElement.className = select;
    } else {
      e.target.parentElement.className = "";
    }
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">E-mail</th>
          <th scope="col">Room No</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
          <th scope="col">Numer of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((p, index) => {
          return (
            <tr onClick={handleClick} key={index}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.firstName}</td>
              <td>{p.surname}</td>
              <td>{p.email}</td>
              <td>{p.roomId}</td>
              <td>{p.checkInDate}</td>
              <td>{p.checkOutDate}</td>
              <td>{moment(p.checkOutDate).diff(p.checkInDate, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
