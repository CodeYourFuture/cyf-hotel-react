import React, { useState } from "react";
import TableRows from "./TableRows";

const SearchResults = props => {
  /*Table added added to website using JSX */
  // 1

  const [clickedRow, setClickedRow] = useState(null);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">Nights In</th>
          </tr>
        </thead>
        <tbody>
          {/* loops through the guest list pass it to props*/}
          {props.guestList.map(element => {
            return (
              <TableRows
                key={element.id}
                element={element}
                isClicked={clickedRow === element.id}
                setClickedRow={setClickedRow}
                id={element.id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
