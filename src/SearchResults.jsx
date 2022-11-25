import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  let [tHead, setTHead] = useState(true);
  function handleClick0() {
    setTHead(!tHead);
  }
  let [row, setRow] = useState(true);
  const handleClick = indx => {
    return row === indx ? setRow(!row) : setRow(indx);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr className={tHead ? "" : "highlightTHead"} onClick={handleClick0}>
            <th scope="col">I.D.</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room I.D.</th>
            <th scope="col">Check-In Date</th>
            <th scope="col">Check-Out Date</th>
            <th scope="col">No. of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking, i) => (
            <tr
              onClick={() => handleClick(i)}
              className={row === i ? "highlightRow" : ""}
              key={i.id}
            >
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                {moment(booking.checkOutDate).diff(
                  moment(booking.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
