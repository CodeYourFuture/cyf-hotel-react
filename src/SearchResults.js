import React, { useState } from "react";

import CustomerProfile from "./CustomerProfile";

import moment from "moment";

moment().format();

const SearchResults = ({ results }) => {
  const [rowSelected, setRowSelected] = useState(null);

  const [isSelected, setIsSelected] = useState([]);

  const handleClick = e => {
    setRowSelected(e.target.id);
    console.log(e.target.id);
  };

  //const [color, setColor] = useState("");

  // const highlight = () => {
  //   if (color === "") {
  //     setColor("red");
  //   } else setColor("");
  // };

  const setClassName = id => {
    if (!isSelected.includes(id)) {
      setIsSelected([...isSelected, id]);
    }
  };

  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Room Id</th>
            <th>Check In Date</th>
            <th>Check Out Date</th>
            <th>Stay(Days)</th>
            <th>Show Profile</th>
          </tr>
        </thead>

        <tbody>
          {results.map((result, index) => {
            let checkInDate = moment(result.checkInDate);
            let checkOutDate = moment(result.checkOutDate);
            return (
              <tr
                key={index}
                onClick={() => setClassName(index)}
                style={
                  isSelected.includes(index)
                    ? {
                        backgroundColor: "cyan"
                      }
                    : { backgroundColor: "white" }
                }
              >
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>{checkOutDate.diff(checkInDate, "days")}</td>
                <td>
                  {" "}
                  <button
                    onClick={handleClick}
                    id={index + 1}
                    className="btn btn-primary"
                  >
                    Show Profile
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {rowSelected && <CustomerProfile id={rowSelected} />}
    </div>
  );
};

export default SearchResults;
