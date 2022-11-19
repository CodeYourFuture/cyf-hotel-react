import React, { useState } from "react";

const SearchResults = props => {
  // const handleClick = () => {
  //   // setIsActive((current) => !current);
  // };

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
                {/* <td></td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
