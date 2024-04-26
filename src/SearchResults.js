import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  const [selectedRow, setSelectedRow] = useState(null);

  function handleClick(rowId) {
    setSelectedRow(rowId === selectedRow ? null : rowId);
  }
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr className="table-row-main">
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Sure Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in</th>
            <th scope="col">Check out</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((value, index) => {
            return (
              <tr
                key={index}
                onClick={() => handleClick(value.id)}
                style={{
                  backgroundColor:
                    value.id === selectedRow ? "#aeccc6" : "white",
                }}
              >
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.firstName}</td>
                <td>{value.surname}</td>
                <td>{value.email}</td>
                <td>{value.roomId}</td>
                <td>{value.checkInDate}</td>
                <td>{value.checkOutDate}</td>
                <td>
                  <button onClick={() => handleClick(value.id)}>
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedRow !== null ? <CustomerProfile id={selectedRow} /> : null}
    </div>
  );
};
export default SearchResults;
