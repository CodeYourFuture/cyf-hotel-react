import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const CountNumberOfNights = (checkInDate, checkOutDate) => {
  let a = moment(checkInDate);
  let b = moment(checkOutDate);
  return b.diff(a, "days");
};

const SearchResults = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedID, setSelectedId] = useState(null);

  function highlightSelectedRow(id) {
    setIsActive(!isActive);
    setSelectedId(id);
  }
  function handleClickOnShowProfile(id) {
    setSelectedId(id);
    console.log("id", id);
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Show profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((data) => {
            return (
              <tr
                key={data.id}
                onClick={() => highlightSelectedRow(data.id)}
                className={
                  isActive && selectedID === data.id ? "highlighted" : ""
                }
              >
                <td>{data.title}</td>
                <td>{data.firstName}</td>
                <td>{data.surname}</td>
                <td>{data.email}</td>
                <td>{data.id}</td>
                <td>{data.checkInDate}</td>
                <td>{data.checkOutDate}</td>
                <td>
                  {CountNumberOfNights(data.checkInDate, data.checkOutDate)}
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handleClickOnShowProfile(data.id);
                    }}
                  >
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={selectedID} />
    </>
  );
};

export default SearchResults;
