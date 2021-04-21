import React from "react";
import moment from "moment";
import { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [color, setColor] = useState("transparent");
  const [customerId, setCustomerId] = useState("");

  function highlightRow(index) {
    setColor(index === color ? "" : index);
  }

  const getCustomerId = id => {
    setCustomerId(id);
  };

  return (
    <div className="table-container">
      <table className="table  results">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of Night</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((item, index) => {
            const startDate = moment(item.checkInDate);
            const endDate = moment(item.checkOutDate);
            let numberOfNights = endDate.diff(startDate, "days", true);

            return (
              <tr
                className={color === index ? "red" : "transparent"}
                onClick={() => highlightRow(index)}
                key={index}
              >
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>{numberOfNights} </td>
                <td>
                  <button onClick={() => getCustomerId(item.id)}>
                    Show profile
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <CustomerProfile props={customerId} />
    </div>
  );
};

export default SearchResults;
