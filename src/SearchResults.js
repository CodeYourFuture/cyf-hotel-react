import React from "react";
import moment from "moment"; // imported the moment js
const SearchResults = props => {
  /*Table added added to website using JSX */
  // 1
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
          {props.guestList.map((element, index) => {
            const a = moment(element.checkOutDate); // using moment js function to pass in checkout date
            const b = moment(element.checkInDate); // using moment js function to pass in checkout date
            const differenceOfDays = a.diff(b, "days"); // calculates the differenceOfDays
            return (
              <tr key={index}>
                {/*assigns key called index to table row*/}
                {/*retrieves the data for the table using array element by accessing object properties*/}
                <th scope="row">{element.id}</th>
                <td>{element.title}</td>
                <td>{element.firstName}</td>
                <td>{element.surname}</td>
                <td>{element.email}</td>
                <td>{element.roomId}</td>
                <td>{element.checkInDate}</td>
                <td>{element.checkOutDate}</td>
                <td>{differenceOfDays}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
