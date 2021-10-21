import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [rowColor, setRowColor] = useState([]);
  const [newCustomer, setNewCustomer] = useState([]);

  const handleClick = i => {
    !rowColor.includes(i)
      ? setRowColor(rows => rows.concat(i))
      : setRowColor(rows => rows.filter(x => x !== i));
  };
  const handleButton = id => {
    newCustomer === "" || newCustomer !== "id"
      ? setNewCustomer(id)
      : setNewCustomer("");
  };

  return (
    <div>
      <table className="table table-light mb-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number Of Nights</th>
            <th scope="col">kj</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((item, i) => (
            <tr
              key={i}
              onClick={() => handleClick(i)}
              className={`${rowColor.includes(i) ? "bg-info" : " "}`}
            >
              <th scope="row">{item.id}</th>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>
                {moment(item.checkOutDate).diff(
                  moment(item.checkInDate),
                  "day"
                )}
              </td>
              <td>
                <button
                  className="btn bg-info text-nowrap "
                  onClick={() => handleButton(item.id)}
                >
                  Show profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {newCustomer.length !== 0 ? <CustomerProfile id={newCustomer} /> : null}
    </div>
  );
}

export default SearchResults;
