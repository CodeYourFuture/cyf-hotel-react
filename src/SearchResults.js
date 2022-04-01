import React, { useState } from "react";
import moment from "moment";
function SearchResults(props) {
  return (
    <div className="table-div">
      <table class="table table-hover">
        <thead className="border">
          <tr className="text-white">
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Number of Nights Stayed</th>
          </tr>
        </thead>
        {props.results.map((e, index) => {
          let inDate = moment(e.checkInDate);
          let outDate = moment(e.checkOutDate);
          const difference = outDate.diff(inDate, "days"); // takes 2 arguments, last one is for if we want output as days or hour or months
          return (
            <tbody>
              <tr
                className={props.colors}
                key={index}
                onClick={props.switchColor}
              >
                <th scope="row">{e.id}</th>
                <td>{e.title}</td>
                <td>{e.firstName}</td>
                <td>{e.surname}</td>
                <td>{e.email}</td>
                <td>{e.roomId}</td>
                <td>{e.checkInDate}</td>
                <td>{e.checkOutDate}</td>
                <td>{difference}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default SearchResults;
