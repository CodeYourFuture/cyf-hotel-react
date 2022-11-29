import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const rowNum = props.results.length;
  let classRows = [];
  for (let i = 0; i < rowNum; i++) {
    classRows.push("unselectedColor");
  }
  const [colorRow, setColorRow] = useState(classRows);
  const updateClassName = index => {
    // const index = 2;
    const newClassArray = [...colorRow]; //!=14
    if (colorRow[index] !== "unselectedColor") {
      newClassArray[index] = "unselectedColor";
    } else {
      newClassArray[index] = "selectedColor";
    }
    setColorRow(newClassArray);
  };
  // const [selectedIndex, setSelectedIndex] = useState();

  // const rowClick = (index) => {
  //   if (selectedIndex === index) setSelectedIndex(null);
  //   else setSelectedIndex(index);
  // };

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
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
            <th scope="col">Show profile</th>
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
              // key={index}
              // onClick={() => rowClick(index)}
              // className={selectedIndex === index ? "red" : "white"}
            >
              {/* {Object.values(result).map(info => <td>{info}</td>)} */}

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

              <td>
                <CustomerProfile id={result.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
