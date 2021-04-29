import React, { useState } from "react";
import moment from "moment";

const SearchResults = function(props) {
  let [color] = useState("noColor");

  function highlighter(e) {
    e.persist();

    if (e.target.parentElement.className === "noColor") {
      e.target.parentElement.className = "highlighted";
    } else {
      e.target.parentElement.className = "noColor";
    }
  }

  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((customer, customerIndex) => {
          return (
            <tr key={customerIndex} className={color} onClick={highlighter}>
              <td>{customer.id}</td>
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
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
