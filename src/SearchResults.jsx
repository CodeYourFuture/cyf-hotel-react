import React, { useState } from "react";
import moment from "moment";
import Bookings from "./Bookings";
import "./SearchResults.css";
import CustomerProfile from "./CustomerProfile";
function SearchResults(props) {
  const [isSelected, setSelection] = useState(false);
  const [rowSelected, setRowSelected] = useState("");

  const changeColors = () => {
    setSelection(!isSelected);
  };

  const clickHandler = event => {
    event.preventDefault();
    setRowSelected(event.target.id);
    console.log(event.target.id);
  };

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">email</th>
            <th scope="col">RoomId</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number Of Nights</th>
            <th scope="col">Show Profile</th>
          </tr>
        </thead>
        {props.results.map((customer, index) => {
          return (
            <tbody>
              <tr
                key={index}
                className={isSelected ? "yellow-background" : null}
                onClick={changeColors}
              >
                <td key={index}>{customer.id}</td>
                <td>{customer.title}</td>
                <td>{customer.firstName}</td>
                <td>{customer.surname}</td>
                <td>{customer.email}</td>
                <td>{customer.roomId}</td>
                <td>{customer.checkInDate}</td>
                <td>{customer.checkOutDate}</td>
                <td>
                  {moment(customer.checkOutDate).diff(
                    moment(customer.checkInDate),
                    "days"
                  )}
                </td>
                <td>
                  {" "}
                  <button onClick={clickHandler} id={index + 1}>
                    Show Profile
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <CustomerProfile id={rowSelected} />
    </div>
  );
}

export default SearchResults;
