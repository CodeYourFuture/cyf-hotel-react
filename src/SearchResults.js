import React, { useState } from "react";
import moment from "moment";
moment().format();

const SearchResults = (props) => {
  const [highlighted, setHighlighted] = useState(false);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Nights total</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result) => {
          function nightsTotal() {
            let dateOut = moment(result.checkOutDate);
            let dateIn = moment(result.checkInDate);
            return dateOut.diff(dateIn, "days");
          }

          function Highlighted() {
            setHighlighted((highlighted) => !highlighted);
          }
          let nights = nightsTotal();
          return (
            <tr
              key={result.id}
              onClick={Highlighted}
              className={highlighted ? "Highlighted" : null}
            >
              <th scope="row">{result.id}</th>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>{nights}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
