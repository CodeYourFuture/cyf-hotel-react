
import React from "react";
import "./SearchResults.css";
import Highlighter from "./Highlighter";

const SearchResults = (props) => {
  return (
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
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
