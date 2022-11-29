import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  function handleProfile(CustomerProfile) {}

  return (
    <div className="table-container">
      <p className="results"> Results</p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check-in date</th>
            <th scope="col">Check-out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Customer profile 1</th>
            {/* <th>Customer profile 2</th> */}
          </tr>
        </thead>
        <tbody>
          {props.results.map(result => {
            let {
              id,
              title,
              firstName,
              surname,
              email,
              roomId,
              checkInDate,
              checkOutDate
            } = result;
            const [selected, setselected] = useState(false);
            return (
              <tr
                style={{
                  backgroundColor: selected ? "#FFCCFF" : "#FFFF99"
                }}
                onClick={() => {
                  setselected(!selected);
                }}
                key={id}
              >
                <td>{id}</td>
                <td>{title}</td>
                <td>{firstName}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td>{roomId}</td>
                <td>{checkInDate}</td>
                <td>{checkOutDate}</td>
                <td>
                  {moment(checkOutDate).diff(moment(checkInDate), "days")}
                </td>
                <td>
                  <button onClick={handleProfile}>Show profile:</button>
                </td>
                {/* <td>
                    <CustomerProfile />
                  </td>  */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
