import React, { useState } from "react";
import data from "../data/fakeBookings.json";
import moment from "moment";

function calculateNumberOfNights(checkInDate, checkOutDate) {
  const a = moment(checkInDate, "YYYY-MM-DD");
  const b = moment(checkOutDate, "YYYY-MM-DD");
  return b.diff(a, "days");
}

const SearchResults = () => {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    console.log("selected", selected);
    setSelected((current) => !current);
    console.log("selected2", selected);

    if (selected) {
      document.getElementById("dami").style.color = "red";
      console.log(document.getElementById("dami").style.color);
      // .style.color = "red";
    }
  }

  return (
    <table className="table">
      <thead>
        <tr id="dami" onClick={handleClick}>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">number of nights</th>
        </tr>
      </thead>

      <tbody>
        {data.map((d) => {
          return (
            <tr onClick={handleClick}>
              {/* <th scope="row">1</th> */}
              <td>{d.title}</td>
              <td>{d.firstName}</td>
              <td>{d.surname}</td>
              <td>{d.email}</td>
              <td>{d.roomId}</td>
              <td>{d.checkInDate}</td>
              <td>{d.checkOutDate}</td>
              <td>{calculateNumberOfNights(d.checkInDate, d.checkOutDate)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
