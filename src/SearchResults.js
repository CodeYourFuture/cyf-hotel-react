import React, { useState, useEffect } from "react";
import moment from "moment";

const headers = [
  "id",
  "title",
  "firstName",
  "surname",
  "email",
  "roomId",
  "checkInDate",
  "checkOutDate",
  "Number of nights",
  "button"
];

const SearchResults = props => {
  const [id, setId] = useState(null);

  function handleButtonClick(clickedId) {
    setId(clickedId);
  }
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            {headers.map(header => {
              return (
                <th scope="col" className="headings">
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {props.results.map(booking => {
            return (
              <BookingRow booking={booking} handleClick={handleButtonClick} />
            );
          })}
        </tbody>
      </table>
      {id && <CustomerProfile id={id} />}
    </div>
  );
};

function BookingRow({ booking, handleClick }) {
  const [selectedRow, setSelectedRow] = useState(false);
  const clickedRow = () => setSelectedRow(!selectedRow);

  return (
    <tr
      //className={selectedRow ? "selectRow" : ""} if there is a class name
      style={selectedRow ? { backgroundColor: "#89d7ee" } : {}}
      onClick={clickedRow}
    >
      <th scope="row">{booking.id}</th>
      {headers.map(header => {
        if (header === "id") {
          return null;
        } else if (header === "Number of nights") {
          const checkInDay = moment(booking.checkInDate);
          const checkOutDay = moment(booking.checkOutDate);
          const lengthOfStay = checkOutDay.diff(checkInDay, "days");
          return lengthOfStay;
        } else if (header === "button") {
          return (
            <button
              className="profile-button"
              onClick={() => handleClick(booking.id)}
            >
              Show Profile
            </button>
          );
        } else {
          return <td>{booking[header]}</td>;
        }
      })}
    </tr>
  );
}

function CustomerProfile(props) {
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }, [props.id]);
  return `Customer ${props.id} Profile`;
}

export default SearchResults;
