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
        {props.results.map(p => {
          return (
            <tr onClick={handleClick} key={p.id}>
              <td id="id">{p.id}</td>
              <td id="title">{p.title}</td>
              <td id="fName">{p.firstName}</td>
              <td id="sName">{p.surname}</td>
              <td id="email">{p.email}</td>
              <td id="roomNo">{p.roomId}</td>
              <td id="chekIn">{p.checkInDate}</td>
              <td id="checkOut">{p.checkOutDate}</td>
              <td id="nights">
                {moment(p.checkOutDate).diff(p.checkInDate, "days")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
