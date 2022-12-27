import React, { useState } from "react";
import Moment from "react-moment";
function SearchResults({ results }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">FirstName</th>
            <th scope="col">Surname</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
          </tr>
        </thead>
        <tbody>
          {results.map((person, index) => {
            const [select, setSelect] = useState(true);
            function handleClick() {
              setSelect(select => !select);
            }
            return (
              <tr
                key={index}
                onClick={handleClick}
                style={{ backgroundColor: select ? "" : "green" }}
              >
                <th scope="row">{person.id}</th>
                <td>{person.title}</td>
                <td>{person.firstName}</td>
                <td>{person.surname}</td>
                <td>{person.email}</td>
                <td>{person.checkInDate}</td>
                <td>{person.checkOutDate}</td>
                <td>
                  <Moment diff={person.checkInDate} unit="days" />
                  {person.checkOutDate}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
