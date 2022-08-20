
import React, { useState } from "react";
import "./SearchResults.css";
import Highlighter from "./Highlighter";
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  const [customerId, setCustomerId] = useState();

  const changeCustomerId = (id) => {
    setCustomerId(id);
  };

  return (
    <div>
      <table className="table bg-light table-hover ">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room Id</th>
            <th>Check in Date</th>
            <th>Check out Date</th>
            <th>Show Profile</th>
            <th>Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result) => {
            let {
              id,
              title,
              firstName,
              surname,
              email,
              roomId,
              checkInDate,
              checkOutDate,
            } = result;

            return (
              <Highlighter
                id={id}
                title={title}
                firstName={firstName}
                surname={surname}
                email={email}
                roomId={roomId}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                changeId={changeCustomerId}
                clickId={id}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
};

export default SearchResults;
