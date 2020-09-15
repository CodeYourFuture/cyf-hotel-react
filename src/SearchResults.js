import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [isSelected, setIsSelected] = useState([]);
  const [rowSelected, setRowSelected] = useState(null);
  console.log(rowSelected);
  const handleClick = e => {
    setRowSelected(e.target.id);
  };

  const setClassName = id => {
    if (!isSelected.includes(id)) {
      setIsSelected([...isSelected, id]);
      //or
      // setIsSelected(isSelected.concat([id]))
    } else {
      setIsSelected(isSelected.filter(p => p !== id));
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="table-row">
            <th scope="col">ID</th>
            <th scope="col">title</th>
            <th scope="col">First name</th>
            <th scope="col">surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">nights</th>
            <th scope="col">Show profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((data, index) => {
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
                <th scope="row">{data.id}</th>
                <td>{data.title}</td>
                <td>{data.firstName}</td>
                <td>{data.surname}</td>
                <td>{data.email}</td>
                <td>{data.roomId}</td>
                <td>{data.checkInDate}</td>
                <td>{data.checkOutDate}</td>
                <td>
                  {moment(data.checkOutDate).diff(data.checkInDate, "days")}
                </td>
                <td>
                  <button onClick={handleClick} id={index + 1}>
                    Show profile
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
