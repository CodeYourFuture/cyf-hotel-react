import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
import "./App.css";

const SearchResults = ({ results }) => {
  const [activeRow, setActiveRow] = useState();
  const [customerId, setCustomerId] = useState(null);

  const handleClick = index =>
    activeRow === index ? setActiveRow(null) : setActiveRow(index);

  const handleButtonClick = clickedId => {
    setCustomerId(clickedId);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">N of nights</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {results.map((booking, index) => {
            return (
              <tr
                key={index}
                onClick={() => handleClick(index)}
                className={activeRow === index ? "highlighted" : null}
              >
                <th scope="row">{booking.id}</th>
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
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={e => {
                      e.stopPropagation();
                      handleButtonClick(booking.id);
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
      {customerId && <CustomerProfile id={customerId} />}
    </>
  );
};

export default SearchResults;
