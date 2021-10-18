import React, { useState } from "react";
import moment from "moment";

// const userInfor = [{
//     id: "9898",
//     title: "Miss",
//     firstName: "Sam",
//     surname: "Smith",
//     email: "Sam.Smith@hotmail.com",
//     roomId: "676",
//     checkInDate: "20/10/21",
//     checkOutDate: "22/10/21",
// }]

const SearchResults = props => {
  console.log(props.formInfo);
  const backgroudColour = {
    red: {
      color: "#786fa6"
    }
  };
  const [highlighted, setHighlighted] = useState(backgroudColour.red);
  function updateColour(event) {
    let newColour = event.target.value;
    setHighlighted(backgroudColour);
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">Duration</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => (
          <tr key={result.id}>
            <th scope="row">{result.id}</th>
            <td onClick={e => updateColour(e)}>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
            <td>
              {moment(result.checkOutDate.replace(/"-"/g, ",")).diff(
                result.checkInDate.replace(/"-"/g, ","),
                "days"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
