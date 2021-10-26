import moment from "moment";
import React, { useState } from "react";

const SearchResults = props => {
  const [color] = useState("");
  function highlightRow(element) {
    if (element.target.parentElement.className === "") {
      element.target.parentElement.className = "gray";
    } else {
      element.target.parentElement.className = "";
    }
  }

  return (
    <div>
      <div>
        <table className="table">
          <thead className="thead-dark text-center">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">First Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              <th scope="col">Room</th>
              <th scope="col">Check in</th>
              <th scope="col">Check out</th>
              <th scope="col">Nights</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {props.results.map((person, index) => (
              <tr key={index} onClick={highlightRow} className={color}>
                <td>{person.id}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchResults;
