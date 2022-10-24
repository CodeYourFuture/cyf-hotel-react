import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [isActive, setActive] = useState("false");

  function handleToggle(id) {}
  return (
    <table className="table ">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Nights staying over</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(
          (
            {
              id,
              title,
              firstName,
              surname,
              email,
              roomId,
              checkInDate,
              checkOutDate
            },
            i
          ) => {
            return (
              /* onClick={handleToggle}
                  className={
                    isActive ? "backgroundOff" : "backgroundOn"
                  } */
              <tr
                key={id}
                onClick={e => console.log(e)}
                className={isActive ? "backgroundOff" : "backgroundOn"}
              >
                <th>{id}</th>
                <td>{title}</td>
                <td>{firstName}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td>{roomId}</td>
                <td>{checkInDate}</td>
                <td>{checkOutDate}</td>
                <td>{moment(checkOutDate).diff(checkInDate, "days")}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
