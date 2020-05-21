import React from "react";

const SearchResults = props => {
  /*Table added added to website using JSX */

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
          </tr>
        </thead>
        <tbody>
          {props.guestList.map((element, index) => {
            return (
              <tr>
                <th key={index} scope="row">
                  {element.id}
                </th>
                <td key={index}>{element.title}</td>
                <td key={index}>{element.firstName}</td>
                <td key={index}>{element.surname}</td>
                <td key={index}>{element.email}</td>
                <td key={index}>{element.roomId}</td>
                <td key={index}>{element.checkInDate}</td>
                <td key={index}>{element.checkOutDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
