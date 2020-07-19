import React, { useState } from "react";
import moment from "moment";
const SearchResults = props => {
  const [isSelected, setIsSelected] = useState([]);
  const setClassName = id => {
    debugger;
    if (!isSelected.includes(id)) {
      // setIsSelected([...isSelected, id]);
      setIsSelected(isSelected.concat([id]));
    } else {
      setIsSelected(isSelected.filter(p => p !== id));
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="">Id</th>
          <th scope="col">Title</th>
          <th scope="col">FirstName</th>
          <th scope="col">Surname</th>
          <th scope="">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check-In-Date</th>
          <th scope="col">Check-Out-Date</th>
          <th scope="col">Number of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((field, index) => {
          const nightsSpent = moment(field.checkOutDate).diff(
            field.checkInDate,
            "days"
          );
          return (
            <tr
              key={index}
              onClick={() => setClassName(index)}
              style={
                isSelected.includes(index)
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "white" }
              }
            >
              <th scope="row">{field.id}</th>
              <td>{field.title}</td>
              <td>{field.firstName}</td>
              <td>{field.lastName}</td>
              <td>{field.email}</td>
              <td>{field.roomId}</td>
              <td>{field.checkInDate}</td>
              <td>{field.checkOutDate}</td>
              <td>{nightsSpent}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
