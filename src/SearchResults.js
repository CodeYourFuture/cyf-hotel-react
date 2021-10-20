import React, { useState } from "react";
import moment from "moment";
import classNames from "classnames";

const TableHeader = () => {
  return (
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
        <th scope="col"> Number of nights</th>
        <th scope="col"> Profile</th>
      </tr>
    </thead>
  );
};

const SearchResults = props => {
  // const [isHighlighted, setIsHighlighted] = useState("false");
  const [selectedIndex, setSelectedIndex] = useState(null);

  // function handleClick(selected) {
  //   setSelectedIndex(() => {
  //     console.log("toggled index", selected);
  //     console.log("selected state", selectedIndex);
  //     return selected;
  //   });
  // }

  return (
    <table className="table">
      <TableHeader />
      <tbody>
        {props.results.map((result, index) => (
          <tr
            key={index}
            onClick={Event =>
              setSelectedIndex(selectedIndex === index ? null : index)
            }
            className={classNames("alert alert-info msg", {
              "bk-color-clicked ": selectedIndex === index,
              "bk-color-default": selectedIndex !== index
            })}
          >
            <th scope="row">{result.id}</th>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
            <td>
              {moment(result.checkOutDate).diff(
                moment(result.checkInDate),
                "days"
              )}
            </td>
            <td>
              <button
                className="btn btn-light"
                onClick={() => props.setCustomerId(result.id)}
              >
                Show Profile
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
