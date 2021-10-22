import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [rowColor, setRowColor] = useState([]);
  const [newCustomer, setNewCustomer] = useState("");

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
      <table className="table table-light mb-5 tables">
        <thead>
          <tr className="text-info bg-light">
            <th scope="col" className="text-nowrap ">
              ID
            </th>
            <th scope="col" className="text-nowrap">
              Title
            </th>
            <th scope="col" className="text-nowrap">
              First Name
            </th>
            <th scope="col" className="text-nowrap">
              Surname
            </th>
            <th scope="col" className="text-nowrap">
              Email
            </th>
            <th scope="col" className="text-nowrap">
              Room ID
            </th>
            <th scope="col" className="text-nowrap">
              Check In Date
            </th>
            <th scope="col" className="text-nowrap">
              Check Out Date
            </th>
            <th scope="col" className="text-nowrap">
              Number Of Nights
            </th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {props.results.map((item, i) => (
            <tr
              key={i}
              onClick={() => handleClick(i)}
              className={`${rowColor.includes(i) ? "bg_color" : " "}`}
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
                  className="btn bg-info text-nowrap text-white"
                  onClick={() => handleButton(item.id)}
                >
                  {" "}
                  Show profile{" "}
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
