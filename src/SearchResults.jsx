import React from "react";
import { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [rowColor, setRowColor] = useState([]);

  const [profileId, setProfileId] = useState(null);

  const Highlight = id => {
    let selectedRow = [...rowColor];

    if (selectedRow.includes(id)) {
      const index = selectedRow.indexOf(id);
      selectedRow.splice(index, 1);
      setRowColor(selectedRow);
    } else {
      selectedRow.push(id);
      setRowColor(selectedRow);
    }
  };
  return (
    <div className="table - responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(person => {
            return (
              <tr
                key={person.id}
                onClick={e => {
                  Highlight(person.id);
                }}
                className={
                  rowColor.includes(person.id) ? "blueVioletBackground" : ""
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
                <td>{numberOfDays(person.checkInDate, person.checkOutDate)}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={e => {
                      e.preventDefault();
                      setProfileId(person.id);
                    }}
                  >
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={profileId} />
    </div>
  );
};

//the number of nights a guest is staying.

function numberOfDays(checkInDate, checkOutDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  const checkIn = new Date(checkInDate);
  const CheckOut = new Date(checkOutDate);

  const dayStayed = Math.round(Math.abs((checkIn - CheckOut) / oneDay));
  return dayStayed;
}

export default SearchResults;
