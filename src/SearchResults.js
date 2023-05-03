import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  const [customerId, setCustomerId] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [direction, setDirection] = useState("desc");
  function handleClick(rowId) {
    setSelectedRow(rowId === selectedRow ? null : rowId);
    setCustomerId(rowId);
  }

  function handleOnColumn(column) {
    if (column === selectedColumn) {
      setDirection(direction === "desc" ? "asc" : "desc");
    } else {
      setSelectedColumn(column);
      setDirection("desc");
    }
  }
  return (
    <div>
      <table className=" table table-hover table table-sm">
        <thead>
          <tr className="table-primary">
            <th onClick={() => handleOnColumn("Id")}>ID</th>
            <th onClick={() => handleOnColumn("Title")}>Title</th>
            <th onClick={() => handleOnColumn("First Name")}>First Name</th>
            <th onClick={() => handleOnColumn("Surname")}>Surname</th>
            <th onClick={() => handleOnColumn("Email")}>Email</th>
            <th onClick={() => handleOnColumn("Room Id")}>Room ID</th>
            <th onClick={() => handleOnColumn("Check in Date")}>
              Check in Date
            </th>
            <th onClick={() => handleOnColumn("Check out Date")}>
              Check out Date
            </th>
            <th onClick={() => handleOnColumn("Night Stay")}>Night Stay</th>
            <th onClick={() => handleOnColumn("Profile")}>Profile</th>
          </tr>
        </thead>

        <tbody>
          {props.results
            .sort((a, b) => {
              if (selectedColumn === "Id") {
                return direction === "desc" ? b.id - a.id : a.id - b.id;
              }
              if (selectedColumn === "Title") {
                return direction === "desc"
                  ? b.title.localeCompare(a.title)
                  : a.title.localeCompare(b.title);
              }
              if (selectedColumn === "First Name") {
                return direction === "desc"
                  ? b.firstName.localeCompare(a.firstName)
                  : a.firstName.localeCompare(b.firstName);
              }
              if (selectedColumn === "Surname") {
                return direction === "desc"
                  ? b.firstName.localeCompare(a.surname)
                  : a.surname.localeCompare(b.surname);
              }
              if (selectedColumn === "Email") {
                return direction === "desc"
                  ? b.email.localeCompare(a.email)
                  : a.email.localeCompare(b.email);
              }
              if (selectedColumn === "Room Id") {
                return direction === "desc"
                  ? b.roomId - a.roomId
                  : a.roomId - b.roomId;
              }
              if (selectedColumn === "Check in Date") {
                return direction === "desc"
                  ? new Date(b.checkInDate) - new Date(a.checkInDate)
                  : new Date(a.checkInDate) - new Date(b.checkInDate);
              }
              if (selectedColumn === "Check out Date") {
                return direction === "desc"
                  ? new Date(b.checkOutDate) - new Date(a.checkOutDate)
                  : new Date(a.checkOutDate) - new Date(b.checkOutDate);
              }
              if (selectedColumn === "Night Stay") {
                return direction === "desc"
                  ? new Date(b.nightStay) - new Date(a.nightStay)
                  : new Date(a.nightStay) - new Date(b.nightStay);
              }
            })
            .map((booking, index) => {
              let a = moment(booking.checkInDate, "YYYY-MM-DD");
              let b = moment(booking.checkOutDate, "YYYY-MM-DD");
              return (
                <tr
                  key={index}
                  onClick={() => handleClick(booking.id)}
                  style={{
                    backgroundColor:
                      booking.id === selectedRow ? "#f2def2" : "#f7f7f7",
                  }}
                >
                  <td>{booking.id}</td>
                  <td>{booking.title}</td>
                  <td>{booking.firstName}</td>
                  <td>{booking.surname}</td>
                  <td>{booking.email}</td>
                  <td>{booking.roomId}</td>
                  <td>{booking.checkInDate}</td>
                  <td>{booking.checkOutDate}</td>
                  <td>{moment(b).diff(a, "days")}</td>
                  <td>
                    <button onClick={() => handleClick(booking.id)}>
                      Show profile
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {customerId && <CustomerProfile customerId={customerId} />}
    </div>
  );
};
export default SearchResults;
