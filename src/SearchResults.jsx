import React from "react";
import { useState } from "react";

const SearchResults = props => {
  const [selectedRowColor, setSelectedRowColor] = useState([]);

  const HighLight = id => {
    let selectedRow = [...selectedRowColor];

    if (selectedRow.includes(id)) {
      const index = selectedRow.indexOf(id);
      selectedRow.splice(index, 1);

      setSelectedRowColor(selectedRow);
    } else {
      selectedRow.push(id);
      setSelectedRowColor(selectedRow);
    }
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number Of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(person => {
            return (
              <tr
                key={person.id}
                onClick={e => {
                  HighLight(person.id);
                }}
                className={
                  selectedRowColor.includes(person.id)
                    ? "lightBlueBackground"
                    : ""
                }
              >
                <td>{person.id}</td>
                <td>{person.title}</td>
                <td>{person.firstName}</td>
                <td>{person.surname}</td>
                <td>{person.email}</td>
                <td>{person.roomId}</td>
                <td>{person.checkInDate}</td>
                <td>{person.checkOutDate}</td>
                <td>
                  {findTheNumberOfDays(person.checkInDate, person.checkOutDate)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Function to find the number of nights a person stayed

function findTheNumberOfDays(checkInDate, checkOutDate) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);

  const daysStayed = Math.round(Math.abs((checkIn - checkOut) / oneDay));
  return daysStayed;
}

export default SearchResults;
