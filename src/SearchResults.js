import React, { useState } from "react";
import moment from "moment";
import "./App.css";

const SearchResults = ({ results }) => {
  const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive((current) => !current);
  // };

  return (
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
        </tr>
      </thead>
      <tbody>
        {results.map((order, index) => (
          <tr
            key={index}
            className={isActive ? "highlighted" : ""}
            // onClick={handleClick}
            onClick={() => setIsActive(!isActive)}
          >
            <th scope="row">{order.id}</th>
            <td>{order.title}</td>
            <td>{order.firstName}</td>
            <td>{order.surname}</td>
            <td>{order.email}</td>
            <td>{order.roomId}</td>
            <td>{order.checkInDate}</td>
            <td>{order.checkOutDate}</td>
            <td>
              {moment(order.checkOutDate).diff(
                moment(order.checkInDate),
                "days"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
