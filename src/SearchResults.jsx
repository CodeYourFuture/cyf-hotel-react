import React from "react";

function findDateDifference(date1, date2) {
  const date1Arr = date1.split("-");
  const date2Arr = date2.split("-");
  const date1Obj = {
    day: date1Arr[0],
    month: date1Arr[1],
    year: date1Arr[2]
  };
  const date2Obj = {
    day: date2Arr[0],
    month: date2Arr[1],
    year: date2Arr[2]
  };
  // hours*minutes*seconds*milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(date1Obj.day, date1Obj.month, date1Obj.year);
  const secondDate = new Date(date2Obj.day, date2Obj.month, date2Obj.year);
  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}

const SearchResults = props => {
  return (
    <table className="search-results-table">
      <tbody>
        <tr>
          <th>ID:</th>
          <th>Title:</th>
          <th>First Name:</th>
          <th>Surname:</th>
          <th>Email:</th>
          <th>Room ID:</th>
          <th>Check In Date:</th>
          <th>Check Out Date:</th>
          <th>Time Staying:</th>
        </tr>

        {props.results.map(person => {
          return (
            <tr>
              <td>{person.id}</td>
              <td>{person.title}</td>
              <td>{person.firstName}</td>
              <td>{person.surname}</td>
              <td>{person.email}</td>
              <td>{person.roomID}</td>
              <td>{person.checkInDate}</td>
              <td>{person.checkOutDate}</td>
              <td>
                {findDateDifference(person.checkInDate, person.checkOutDate)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
