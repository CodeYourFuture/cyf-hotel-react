import React, { useState } from "react";
import moment from "moment";

// const SearchResults = (props) => {
//   const [click, setClick] = useState();
//   function ButtonClick() {
//     setClick(click);
//   }
const SearchResults = props => {
  const rowNum = props.results.length;
  let classRows = [];
  for (let i = 0; i < rowNum; i++) {
    classRows.push("unselectedColor");
  }
  const [colorRow, setColorRow] = useState(classRows);
  const updateClassName = index => {
    // const index = 2;
    const newClassArray = [...colorRow];
    if (colorRow[index] !== "unselectedColor") {
      newClassArray[index] = "unselectedColor";
    } else {
      newClassArray[index] = "selectedColor";
    }
    setColorRow(newClassArray);
  };

  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">No. of nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, index) => (
            <tr
              key={result.id}
              className={colorRow[index]}
              selected
              color
              onClick={updateClassName.bind(this, index)}
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
