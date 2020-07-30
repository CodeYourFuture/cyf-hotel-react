import React, { useState } from "react";
import "./SearchResults.css";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [isSelected, setIsSelected] = useState([]);
  const [rowSelected, setRowSelected] = useState(null);
  console.log(rowSelected);

  // const profile = <CustomerProfile />;
  const handleClick = e => {
    setRowSelected(e.target.id);
    console.log(e.target.id);
  };

  const setClassName = id => {
    if (!isSelected.includes(id)) {
      // setIsSelected([...isSelected, id]);
      setIsSelected(isSelected.concat([id]));
    } else {
      setIsSelected(isSelected.filter(p => p !== id));
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">FirstName</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check-In-Date</th>
            <th scope="col">Check-Out-Date</th>
            <th scope="col">Number of Nights</th>
            <th scope="col">Show Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((field, index) => {
            const nightsSpent = moment(field.checkOutDate).diff(
              field.checkInDate,
              "days"
            );

            return (
              <tr
                key={index}
                onClick={() => setClassName(index)}
                style={
                  isSelected.includes(index)
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "white" }
                }
              >
                <th scope="row">{field.id}</th>
                <td>{field.title}</td>
                <td>{field.firstName}</td>
                <td>{field.surname}</td>
                <td>{field.email}</td>
                <td>{field.roomId}</td>
                <td>{field.checkInDate}</td>
                <td>{field.checkOutDate}</td>
                <td>{nightsSpent}</td>

                <td>
                  <button onClick={handleClick} id={index + 1}>
                    Show Profile
                  </button>
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
