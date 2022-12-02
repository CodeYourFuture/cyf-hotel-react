import moment from "moment";
import React, { useState } from "react";
// import Highlight from "./Highlight";

export default function SearchResults({ results }) {
  const [selectedIndex, setSelectedIndex] = useState();

  const handleClick = checkIndex => {
    return selectedIndex === checkIndex
      ? setSelectedIndex(null)
      : setSelectedIndex(checkIndex);
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">No of nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((person, index) => {
            return (
              <tr
                key={index}
                onCLick={() => handleClick(index)}
                className={selectedIndex === index ? "clicked" : "unclicked"}
              >
                <th scope="row">{person.id}</th>
                <td>{person.title}</td>
                <td>{person.firstName}</td>
                <td>{person.surname}</td>
                <td>{person.email}</td>
                <td>{person.roomId}</td>
                <td>{person.checkInDate}</td>
                <td>{person.checkOutDate}</td>
                <td>
                  {moment(person.checkOutDate).diff(person.checkInDate, "days")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
