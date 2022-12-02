import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [activeRow, setActiveRow] = useState();

  const handleClick = index => {
    return activeRow === index ? setActiveRow(null) : setActiveRow(index);
  };

  const toggleClassName = index => {
    return activeRow === index ? "grey" : "";
  };

  const [id, setId] = useState("");

  const handleProfileClick = index => {
    setId(index + 1);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Profiles</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((data, index) => (
            <tr
              onClick={() => {
                handleClick(index);
              }}
              className={toggleClassName(index)}
              key={index}
            >
              <th scope="row">{data.id}</th>
              <td>{data.title}</td>
              <td>{data.firstName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>3{data.roomId}</td>
              <td>{data.checkInDate}</td>
              <td>{data.checkOutDate}</td>
              <td>
                {moment(data.checkOutDate).diff(data.checkInDate, "days")}
              </td>
              <td>
                <button
                  onClick={() => {
                    handleProfileClick(index);
                  }}
                  className="btn btn-primary"
                >
                  Show profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {id ? <CustomerProfile id={id} /> : null}
    </div>
  );
};

export default SearchResults;
