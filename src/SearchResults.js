import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [isSelected, setIsSelected] = useState([]);
  console.log(isSelected);
  const setClassName = id => {
    if (!isSelected.includes(id)) {
      // setIsSelected([...isSelected, id]);
      setIsSelected(isSelected.concat([id]));
    } else {
      setIsSelected(isSelected.filter(p => p !== id));
    }
  };
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, index) => {
          return (
            <tr
              key={index}
              onClick={() => setClassName(index)}
              style={
                isSelected.includes(index)
                  ? { backgroundColor: "#0A944F" }
                  : { backgroundColor: "#2C4E64" }
              }
            >
              <th scope="row">{result.id}</th>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {moment(result.checkOutDate).diff(result.checkInDate, "days")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
