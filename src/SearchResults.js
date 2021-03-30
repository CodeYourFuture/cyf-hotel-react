import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [inActive, setActive] = useState(-1);
  const [selectedCustomerId, setSelectedCustomerId] = useState("");

  /* 
  - using the state the colorChanger will toggle between -1 and index of each person object in the array
  - and each row do of object will have a class added if the state variable inActive === index of each object in the array
  */
  function colorChanger(index) {
    setActive(index === inActive ? -1 : index);
  }
  return (
    <>
      <table className="table mt-3 mb-2">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name </th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">No of Nights</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, index) => (
            <tr
              key={index}
              onClick={() => colorChanger(index)}
              className={inActive === index ? "selected" : ""}
              style={{ cursor: "pointer" }}
            >
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {moment(result.checkOutDate).diff(result.checkInDate, "days")}
              </td>
              <td>
                <button
                  onClick={() => {
                    console.log(result.id);

                    setSelectedCustomerId(result.id);
                  }}
                >
                  Show profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CustomerProfile id={selectedCustomerId} />
    </>
  );
};

export default SearchResults;
