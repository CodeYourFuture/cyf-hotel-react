import React, { useState } from "react";
const findDateDifference = (date1, date2) => {
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
};

const SearchResults = props => {
  const [highLightedState, setHighLightedState] = useState(false);
  const toggleHighLight = () => {
    setHighLightedState(currentState => (currentState = !highLightedState));
  };
  return (
    <table className="search-results-table">
      <tbody>
        <tr
          key="locked-table-row"
          className={highLightedState ? "high-lighted" : ""}
          onClick={toggleHighLight}
        >
          <th key="locked-table-row-th1">ID:</th>
          <th key="locked-table-row-th2">Title:</th>
          <th key="locked-table-row-th3">First Name:</th>
          <th key="locked-table-row-th4">Surname:</th>
          <th key="locked-table-row-th5">Email:</th>
          <th key="locked-table-row-th6">Room ID:</th>
          <th key="locked-table-row-th7">Check In Date:</th>
          <th key="locked-table-row-th8">Check Out Date:</th>
          <th key="locked-table-row-th9">Time Staying:</th>
        </tr>

        {props.results.map((person, index) => {
          return (
            <tr
              key={`tr-${index}`}
              className={highLightedState ? "high-lighted" : ""}
              onClick={toggleHighLight}
            >
              <td key={`id-${index}`}>{person.id}</td>
              <td key={`title-${index}`}>{person.title}</td>
              <td key={`fname-${index}`}>{person.firstName}</td>
              <td key={`lname-${index}`}>{person.surname}</td>
              <td key={`email-${index}`}>{person.email}</td>
              <td key={`roomID-${index}`}>{person.roomID}</td>
              <td key={`inDate-${index}`}>{person.checkInDate}</td>
              <td key={`outDate-${index}`}>{person.checkOutDate}</td>
              <td key={`timeStayed-${index}`}>
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
