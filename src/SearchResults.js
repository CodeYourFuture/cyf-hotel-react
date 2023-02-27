import moment from "moment";
import React, { useState } from "react";

const SearchResults = props => {
  const [selected, setSelected] = useState("-1");

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">No. Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(book => {
          return (
            <tr
              key={book.id}
              onClick={() => {
                selected !== book.id ? setSelected(book.id) : setSelected("");
              }}
              className={"".concat(selected === book.id ? "highlight" : "")}
            >
              <th scope="row">{book.id}</th>
              <td>{book.title}</td>
              <td>{book.firstName}</td>
              <td>{book.surname}</td>
              <td>{book.email}</td>
              <td>{book.roomId}</td>
              <td>{book.checkInDate}</td>
              <td>{book.checkOutDate}</td>
              <td>
                {moment(book.checkOutDate).diff(
                  moment(book.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
